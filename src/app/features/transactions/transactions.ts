import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { CifService } from '../../core/services/cif.service';
import { BankingApiService } from '../../core/services/banking-api.service';
import { SessionService } from '../../core/services/session.service';
import { PRODUCT_CODES, PRODUCT_LABELS, ProductKey } from '../../core/constants/products';
import { parseFdData } from '../../core/utils/fd';
import { num } from '../../core/utils/format';
import { MiniStatementData, ProductAccount } from '../../models';
import { InrNumberPipe } from '../../shared/pipes/inr-number.pipe';
import { PacsDatePipe } from '../../shared/pipes/pacs-date.pipe';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { StatRow } from '../../shared/components/stat-row/stat-row';

const STATEMENT_PRODUCTS: ProductKey[] = ['share', 'savings', 'fd', 'loan'];

const SLUG_TO_KEY: Record<string, ProductKey> = {
  share: 'share',
  savings: 'savings',
  fd: 'fd',
  loan: 'loan',
};

@Component({
  selector: 'app-transactions',
  imports: [RouterLink, StatCard, StatRow, InrNumberPipe, PacsDatePipe],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  private readonly route = inject(ActivatedRoute);
  private readonly cifService = inject(CifService);
  private readonly api = inject(BankingApiService);
  private readonly session = inject(SessionService);

  protected readonly dashboard = this.cifService.lastDashboard;
  protected readonly products = STATEMENT_PRODUCTS;
  protected readonly labels = PRODUCT_LABELS;
  protected readonly loading = signal(false);
  protected readonly error = signal('');
  protected readonly statement = signal<MiniStatementData | null>(null);
  protected readonly fdNo = signal('');
  protected readonly productKey = signal<ProductKey | ''>('');

  constructor() {
    this.route.paramMap
      .pipe(switchMap((params) => this.cifService.ensureDashboard().pipe(switchMap(() => of(params)))))
      .subscribe((params) => {
        const key = SLUG_TO_KEY[params.get('product') || ''] ?? '';
        const acc = Number(params.get('acc') ?? -1);
        this.productKey.set(key);
        this.statement.set(null);
        this.error.set('');
        this.fdNo.set('');
        if (key && acc >= 0) {
          this.loadStatement(key, acc);
        } else if (key && this.accountsFor(key).length === 1) {
          this.loadStatement(key, 0);
        }
      });
  }

  protected statementTitle(): string {
    const key = this.productKey();
    return key ? this.labels[key] : 'મિની સ્ટેટમેન્ટ';
  }

  protected selectedAccounts(): ProductAccount[] {
    return this.accountsFor(this.productKey());
  }

  protected pickLabel(acc: ProductAccount): string {
    const key = this.productKey();
    return key ? this.accLabel(key, acc) : '';
  }

  protected accountsFor(key: ProductKey | ''): ProductAccount[] {
    const d = this.dashboard();
    if (!d || !key) return [];
    if (key === 'share') return d.share.accounts;
    if (key === 'savings') return d.savings.accounts;
    if (key === 'fd') return d.fd.accounts;
    if (key === 'loan') return d.loanAccounts;
    return [];
  }

  protected accLabel(key: ProductKey, acc: ProductAccount): string {
    if (key === 'fd') {
      const fd = parseFdData(acc.other_data1).fdr_no;
      return fd ? `FDR ${fd}` : `ખાતા ${acc.acc_no}`;
    }
    return `ખાતા નં. ${acc.acc_no}`;
  }

  private loadStatement(key: ProductKey, index: number): void {
    const d = this.dashboard();
    const acc = this.accountsFor(key)[index];
    if (!d) return;

    if (!this.session.isLive()) {
      const demoRows =
        key === 'loan'
          ? [
              { date1: '20261005', total_cr: 0, total_dr: 10000, remark: 'હપ્તો — મુદલ' },
              { date1: '20261005', total_cr: 0, total_dr: 3000, remark: 'હપ્તો — વ્યાજ' },
            ]
          : key === 'fd'
            ? [
                { date1: '20240101', total_cr: num(acc?.Balance), total_dr: 0, remark: 'FD ખોલ્યું' },
                { date1: '20261001', total_cr: 4500, total_dr: 0, remark: 'વ્યાજ જમા' },
              ]
            : [
                { date1: '20261020', total_cr: 5000, total_dr: 0, remark: 'જમા' },
                { date1: '20261012', total_cr: 0, total_dr: 1200, remark: 'ઉપાડ' },
                { date1: '20260928', total_cr: 250, total_dr: 0, remark: 'વ્યાજ' },
              ];
      this.statement.set({
        acc_no: acc?.acc_no ?? d.cifId,
        balance:
          key === 'share'
            ? d.share.balance
            : key === 'savings'
              ? num(acc?.Balance ?? d.savings.totalBalance)
              : num(acc?.Balance),
        data: demoRows,
      });
      if (key === 'fd' && acc) this.fdNo.set(parseFdData(acc.other_data1).fdr_no);
      return;
    }

    this.loading.set(true);
    if (key === 'fd' && acc) this.fdNo.set(parseFdData(acc.other_data1).fdr_no);

    this.api
      .miniStatement(d.cifId, PRODUCT_CODES[key], acc)
      .pipe(
        catchError((err: Error) => {
          this.error.set(err.message || 'મિની સ્ટેટમેન્ટ મળી નથી.');
          return of(null);
        }),
      )
      .subscribe((data) => {
        this.loading.set(false);
        this.statement.set(data);
      });
  }

  protected txAmount(row: { total_cr?: unknown; total_dr?: unknown }): { amt: number; typ: string } {
    const credit = num(row.total_cr);
    const debit = num(row.total_dr);
    return credit > 0 ? { amt: credit, typ: 'Cr' } : { amt: debit, typ: 'Dr' };
  }
}

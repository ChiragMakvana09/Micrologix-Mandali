import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CifService } from '../../core/services/cif.service';
import { PRODUCT_LABELS, ProductKey } from '../../core/constants/products';
import { fdTermLabel, parseFdData } from '../../core/utils/fd';
import { num } from '../../core/utils/format';
import { ProductAccount } from '../../models';
import { InrNumberPipe } from '../../shared/pipes/inr-number.pipe';
import { PacsDatePipe } from '../../shared/pipes/pacs-date.pipe';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { StatRow } from '../../shared/components/stat-row/stat-row';
import { LandTable } from '../dashboard/components/land-table/land-table';

const SLUG_TO_KEY: Record<string, ProductKey> = {
  share: 'share',
  savings: 'savings',
  fd: 'fd',
  loan: 'loan',
  'loan-due': 'loanDue',
  land: 'milkat',
};

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, StatCard, StatRow, InrNumberPipe, PacsDatePipe, LandTable],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  private readonly cifService = inject(CifService);
  private readonly route = inject(ActivatedRoute);

  protected readonly key = toSignal(
    this.route.paramMap.pipe(map((p) => SLUG_TO_KEY[p.get('key') || 'share'] ?? 'share')),
    { initialValue: 'share' as ProductKey },
  );

  protected readonly dashboard = this.cifService.lastDashboard;
  protected readonly title = computed(() => PRODUCT_LABELS[this.key()] ?? this.key());

  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }

  protected readonly accounts = computed<ProductAccount[]>(() => {
    const d = this.dashboard();
    if (!d) return [];
    switch (this.key()) {
      case 'share':
        return d.share.accounts;
      case 'savings':
        return d.savings.accounts;
      case 'fd':
        return d.fd.accounts;
      case 'loan':
        return d.loanAccounts;
      case 'loanDue':
        return d.loan.allAccounts;
      default:
        return [];
    }
  });

  protected accNo(acc: ProductAccount): string {
    return String(acc.acc_no ?? '');
  }

  protected balance(acc: ProductAccount): number {
    return num(acc.Balance ?? acc.balance);
  }

  protected fd(acc: ProductAccount) {
    return parseFdData(acc.other_data1);
  }

  protected term(acc: ProductAccount): string {
    return fdTermLabel(this.fd(acc));
  }

  protected statementLink(_acc: ProductAccount, index: number): string[] {
    const slug = this.key() === 'loanDue' ? 'loan' : this.key();
    return ['/transactions', slug, String(index)];
  }
}

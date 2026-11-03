import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, delay, forkJoin, map, of, switchMap, throwError } from 'rxjs';
import { Cif, CifDashboard, LandRecord, Sabhasad } from '../../models';
import { BalanceData, LandApiRow, ProductAccount } from '../../models/api.model';
import { PRODUCT_CODES } from '../constants/products';
import { parseFdData } from '../utils/fd';
import { num, parseApiDate, todayIst } from '../utils/format';
import { BankingApiService } from './banking-api.service';
import { MOCK_CIFS, MOCK_DASHBOARDS } from './cif-mock.data';
import { NoticeService } from './notice.service';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class CifService {
  private readonly api = inject(BankingApiService);
  private readonly session = inject(SessionService);
  private readonly notices = inject(NoticeService);

  /** Last successfully loaded dashboard, used by detail pages. */
  readonly lastDashboard = signal<CifDashboard | null>(null);

  reset(): void {
    this.lastDashboard.set(null);
    this.notices.sync(null);
  }

  getCifList(): Observable<Cif[]> {
    if (!this.session.isLive()) {
      return of(MOCK_CIFS).pipe(delay(250));
    }

    return this.api.listSabhasads().pipe(
      map((list) => list.map((s) => this.toCif(s))),
    );
  }

  /** Reload the last selected member after a page refresh. */
  ensureDashboard(): Observable<CifDashboard | null> {
    const current = this.lastDashboard();
    if (current) return of(current);
    const id = this.session.selectedSabhasadNo();
    return id ? this.getDashboard(id).pipe(catchError(() => of(null))) : of(null);
  }

  getDashboard(cifId: string): Observable<CifDashboard> {
    if (!this.session.isLive()) {
      const data = MOCK_DASHBOARDS[cifId];
      return data
        ? of(data).pipe(
            delay(300),
            map((d) => {
              this.lastDashboard.set(d);
              this.session.selectSabhasad(cifId);
              this.notices.sync(d);
              return d;
            }),
          )
        : throwError(() => new Error(`CIF ${cifId} not found`));
    }

    return this.api.selectSabhasad(cifId).pipe(
      catchError(() => of(null)),
      switchMap((member) =>
        forkJoin({
          share: this.api.productBalance(cifId, PRODUCT_CODES.share).pipe(catchError(() => of(null))),
          savings: this.api.productBalance(cifId, PRODUCT_CODES.savings).pipe(catchError(() => of(null))),
          fd: this.api.productBalance(cifId, PRODUCT_CODES.fd).pipe(catchError(() => of(null))),
          loan: this.api.productBalance(cifId, PRODUCT_CODES.loan).pipe(catchError(() => of(null))),
          loanDue: this.api.productBalance(cifId, PRODUCT_CODES.loanDue).pipe(catchError(() => of(null))),
          land: this.api.milkatPatrak(cifId).pipe(catchError(() => of([] as LandApiRow[]))),
        }).pipe(map((parts) => this.composeDashboard(cifId, member, parts))),
      ),
      map((dashboard) => {
        this.lastDashboard.set(dashboard);
        this.session.selectSabhasad(cifId);
        this.notices.sync(dashboard);
        return dashboard;
      }),
    );
  }

  private toCif(s: Sabhasad): Cif {
    const no = String(s.sabhasad_no ?? '');
    return {
      id: no,
      cifNo: no,
      name: s.name1 || no,
      village: s.v_name || s.village,
    };
  }

  private composeDashboard(
    cifId: string,
    member: Sabhasad | null,
    parts: {
      share: BalanceData | null;
      savings: BalanceData | null;
      fd: BalanceData | null;
      loan: BalanceData | null;
      loanDue: BalanceData | null;
      land: LandApiRow[];
    },
  ): CifDashboard {
    const shareAccounts = parts.share?.data ?? [];
    const savingsAccounts = parts.savings?.data ?? [];
    const fdAccounts = parts.fd?.data ?? [];
    const loanDueAccounts = parts.loanDue?.data ?? [];
    const loanAccounts = parts.loan?.data ?? [];

    const dueAccounts = loanDueAccounts.filter((a) => num(a.demand) > 0);
    const totalOutstanding = loanDueAccounts.reduce((sum, a) => sum + num(a.Balance ?? a.balance), 0);
    const duePrincipal = dueAccounts.reduce((sum, a) => sum + num(a.demand), 0);
    const dueInterest = dueAccounts.reduce((sum, a) => sum + num(a.vyajbaki), 0);
    const firstDue = dueAccounts[0] ?? loanDueAccounts[0];

    return {
      cifId,
      member,
      share: {
        balance: num(parts.share?.total_balance ?? member?.share_amount),
        dividend: num(member?.divi_amount),
        accounts: shareAccounts,
      },
      savings: {
        totalAccounts: savingsAccounts.length,
        totalBalance: num(parts.savings?.total_balance ?? member?.savings_amount),
        accounts: savingsAccounts,
      },
      fd: {
        totalReceipts: fdAccounts.length,
        totalBalance: num(parts.fd?.total_balance ?? member?.fd_amount),
        maturingReceipts: this.countMaturing(fdAccounts),
        accounts: fdAccounts,
      },
      loan: {
        loanRef: String(firstDue?.acc_no ?? (loanDueAccounts.length || '')),
        totalOutstanding: totalOutstanding || num(member?.dhiran_amount),
        duePrincipal,
        dueInterest,
        asOf: todayIst(),
        dueAccounts,
        allAccounts: loanDueAccounts,
      },
      land: this.mapLand(parts.land),
      loanAccounts,
    };
  }

  private countMaturing(accounts: ProductAccount[]): number {
    const horizon = Date.now() + 90 * 24 * 60 * 60 * 1000;
    return accounts.filter((acc) => {
      const last = parseApiDate(parseFdData(acc.other_data1).last_date);
      return last != null && last.getTime() <= horizon;
    }).length;
  }

  private mapLand(rows: LandApiRow[]) {
    const records: LandRecord[] = rows.map((row, i) => ({
      serial: i + 1,
      village: row.v_name || '-',
      surveyNo: String(row.sarve_no || '-'),
      eightANo: String(row.mam_no || '-'),
      hectareAare: num(row.hector_are).toFixed(4),
    }));
    const total = rows.reduce((s, r) => s + num(r.hector_are), 0);
    return {
      totalLand: total.toFixed(4),
      sabhasadType: rows[0]?.sabhasad_type,
      records,
    };
  }
}

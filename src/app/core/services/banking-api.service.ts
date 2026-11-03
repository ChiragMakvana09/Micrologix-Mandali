import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError, timeout } from 'rxjs';
import { APP_CONFIG } from '../config/app-config';
import {
  BalanceData,
  LandApiRow,
  MiniStatementData,
  PacsEnvelope,
  ProductAccount,
  Sabhasad,
} from '../../models/api.model';
import { PRODUCT_CODES } from '../constants/products';
import { SessionService } from './session.service';

interface SabhasadPayload {
  sabhasadData?: Sabhasad[];
}

interface BalancePayload {
  balanceData?: BalanceData;
}

interface LandPayload {
  milkatPatrakData?: LandApiRow[];
}

interface LedgerPayload {
  file_token?: string;
  file_url?: string;
  url?: string;
}

interface StatementPayload {
  balanceData?: MiniStatementData & { total_balance?: number | string };
}

@Injectable({ providedIn: 'root' })
export class BankingApiService {
  private readonly http = inject(HttpClient);
  private readonly session = inject(SessionService);

  listSabhasads(): Observable<Sabhasad[]> {
    return this.post<SabhasadPayload>({ option_selection: 'sabhasad' }).pipe(
      map((data) => data?.sabhasadData ?? []),
    );
  }

  selectSabhasad(sabhasadNo: string): Observable<Sabhasad | null> {
    return this.post<SabhasadPayload>({
      option_selection: 'selectedsabhasad',
      sabhasad_no: sabhasadNo,
    }).pipe(map((data) => data?.sabhasadData?.[0] ?? null));
  }

  productBalance(sabhasadNo: string, product: number): Observable<BalanceData | null> {
    return this.post<BalancePayload>({
      option_selection: 'productBalance',
      sabhasad_no: sabhasadNo,
      product,
    }).pipe(
      map((data) => {
        const balance = data?.balanceData ?? null;
        if (balance) balance.sabhasad_no = sabhasadNo;
        return balance;
      }),
    );
  }

  milkatPatrak(sabhasadNo: string): Observable<LandApiRow[]> {
    return this.post<LandPayload>({
      option_selection: 'Milkat_patrak',
      sabhasad_no: sabhasadNo,
    }).pipe(map((data) => data?.milkatPatrakData ?? []));
  }

  miniStatement(
    sabhasadNo: string,
    product: number,
    acc?: ProductAccount,
  ): Observable<MiniStatementData | null> {
    const body: Record<string, unknown> = {
      option_selection: 'Transaction',
      product,
      sabhasad_no: sabhasadNo,
    };

    if (product !== PRODUCT_CODES.share && acc) {
      body['acc_no'] = acc.acc_no;
      body['h_code'] = acc.h_code;
    }
    if (product === PRODUCT_CODES.fd && acc) {
      body['other_data2'] = acc.other_data2;
    }

    return this.post<StatementPayload>(body).pipe(
      map((data) => {
        const st = data?.balanceData;
        if (!st) return null;
        if (st.balance == null && st.total_balance != null) {
          st.balance = st.total_balance;
        }
        return st;
      }),
    );
  }

  ledger(
    sabhasadNo: string,
    product: number,
    acc?: ProductAccount,
  ): Observable<LedgerPayload | null> {
    const isShare = product === PRODUCT_CODES.share;
    return this.post<LedgerPayload>({
      option_selection: 'Ledger',
      product: String(product),
      sabhasad_no: String(sabhasadNo),
      acc_no: String(isShare ? sabhasadNo : acc?.acc_no || ''),
      h_code: String(acc?.h_code ?? ''),
    });
  }

  private post<T>(body: Record<string, unknown>): Observable<T> {
    const creds = this.session.credentials();
    if (!creds) {
      return throwError(() => new Error('Session credentials missing'));
    }

    const payload = {
      business_number: creds.businessNumber,
      business_code: creds.businessCode,
      sabhasad_mobile: creds.mobile,
      ...body,
    };

    return this.http.post<PacsEnvelope<T>>(APP_CONFIG.apiUrl, payload).pipe(
      timeout(APP_CONFIG.requestTimeoutMs),
      map((res) => {
        if (res.status != null && res.status !== 200) {
          throw new Error(res.message || 'API error');
        }
        return (res.payload?.data ?? ({} as T)) as T;
      }),
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          const msg =
            (err.error as PacsEnvelope | undefined)?.message ||
            err.message ||
            'Network error';
          return throwError(() => new Error(msg));
        }
        return throwError(() => err);
      }),
    );
  }
}

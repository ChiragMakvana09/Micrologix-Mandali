import {
  HttpClient,
  HttpErrorResponse,
  Injectable,
  SessionService,
  __spreadValues,
  catchError,
  inject,
  map,
  setClassMetadata,
  throwError,
  timeout,
  ɵɵdefineInjectable
} from "./chunk-7S7ANFFG.js";

// src/app/core/constants/products.ts
var PRODUCT_CODES = {
  share: 1002,
  savings: 1003,
  fd: 1005,
  loan: 1007,
  loanDue: 1011,
  milkat: 1101
};
var PRODUCT_LABELS = {
  share: "\u0AB6\u0AC7\u0AB0",
  savings: "\u0AB8\u0AC7\u0AB5\u0ABF\u0A82\u0A97\u0ACD\u0AB8",
  fd: "\u0A8F\u0AAB.\u0AA1\u0AC0.",
  loan: "\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3",
  loanDue: "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3",
  milkat: "\u0AAE\u0ABF\u0AB2\u0A95\u0AA4 \u0AAA\u0AA4\u0ACD\u0AB0\u0A95"
};

// src/app/core/config/app-config.ts
var APP_CONFIG = {
  /** Dev: Angular proxy. Prod: same-origin reverse proxy to the PACS host. */
  apiUrl: "/pacsBanking/api/v1",
  requestTimeoutMs: 3e4
};

// src/app/core/services/banking-api.service.ts
var BankingApiService = class _BankingApiService {
  http = inject(HttpClient);
  session = inject(SessionService);
  listSabhasads() {
    return this.post({ option_selection: "sabhasad" }).pipe(map((data) => data?.sabhasadData ?? []));
  }
  selectSabhasad(sabhasadNo) {
    return this.post({
      option_selection: "selectedsabhasad",
      sabhasad_no: sabhasadNo
    }).pipe(map((data) => data?.sabhasadData?.[0] ?? null));
  }
  productBalance(sabhasadNo, product) {
    return this.post({
      option_selection: "productBalance",
      sabhasad_no: sabhasadNo,
      product
    }).pipe(map((data) => {
      const balance = data?.balanceData ?? null;
      if (balance)
        balance.sabhasad_no = sabhasadNo;
      return balance;
    }));
  }
  milkatPatrak(sabhasadNo) {
    return this.post({
      option_selection: "Milkat_patrak",
      sabhasad_no: sabhasadNo
    }).pipe(map((data) => data?.milkatPatrakData ?? []));
  }
  miniStatement(sabhasadNo, product, acc) {
    const body = {
      option_selection: "Transaction",
      product,
      sabhasad_no: sabhasadNo
    };
    if (product !== PRODUCT_CODES.share && acc) {
      body["acc_no"] = acc.acc_no;
      body["h_code"] = acc.h_code;
    }
    if (product === PRODUCT_CODES.fd && acc) {
      body["other_data2"] = acc.other_data2;
    }
    return this.post(body).pipe(map((data) => {
      const st = data?.balanceData;
      if (!st)
        return null;
      if (st.balance == null && st.total_balance != null) {
        st.balance = st.total_balance;
      }
      return st;
    }));
  }
  ledger(sabhasadNo, product, acc) {
    const isShare = product === PRODUCT_CODES.share;
    return this.post({
      option_selection: "Ledger",
      product: String(product),
      sabhasad_no: String(sabhasadNo),
      acc_no: String(isShare ? sabhasadNo : acc?.acc_no || ""),
      h_code: String(acc?.h_code ?? "")
    });
  }
  post(body) {
    const creds = this.session.credentials();
    if (!creds) {
      return throwError(() => new Error("Session credentials missing"));
    }
    const payload = __spreadValues({
      business_number: creds.businessNumber,
      business_code: creds.businessCode,
      sabhasad_mobile: creds.mobile
    }, body);
    return this.http.post(APP_CONFIG.apiUrl, payload).pipe(timeout(APP_CONFIG.requestTimeoutMs), map((res) => {
      if (res.status != null && res.status !== 200) {
        throw new Error(res.message || "API error");
      }
      return res.payload?.data ?? {};
    }), catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        const msg = err.error?.message || err.message || "Network error";
        return throwError(() => new Error(msg));
      }
      return throwError(() => err);
    }));
  }
  static \u0275fac = function BankingApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankingApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BankingApiService, factory: _BankingApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankingApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PRODUCT_CODES,
  PRODUCT_LABELS,
  BankingApiService
};
//# debugId=581dc056-f7c6-5ca7-85cb-2cb569ef7c9e
//# sourceMappingURL=chunk-73B52QV6.js.map

import {
  BankingApiService,
  PRODUCT_CODES
} from "./chunk-73B52QV6.js";
import {
  Injectable,
  Pipe,
  SessionService,
  catchError,
  delay,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵdefinePipe
} from "./chunk-7S7ANFFG.js";

// src/app/core/utils/fd.ts
function parseFdData(str) {
  const [
    fdr_no = "",
    first_date = "",
    last_date = "",
    interest = "",
    term = "",
    fdv_type = "",
    total_amount = "",
    paid_amount = "",
    ...rest
  ] = String(str || "").split(",");
  return {
    fdr_no,
    first_date,
    last_date,
    interest,
    term,
    fdv_type,
    total_amount,
    paid_amount,
    fd_type: rest.join(",").trim()
  };
}
function fdTermLabel(fd) {
  const unit = String(fd.fdv_type).trim() === "0" ? "\u0AAE\u0AB9\u0ABF\u0AA8\u0ABE" : "\u0AA6\u0ABF\u0AB5\u0AB8";
  return `${fd.term} ${unit}`;
}

// src/app/core/utils/format.ts
function fmtInr(n, decimals = 0) {
  const num2 = Number(n || 0);
  const [int, dec] = Math.abs(num2).toFixed(decimals).split(".");
  const last3 = int.slice(-3);
  const rest = int.slice(0, -3);
  const grouped = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3 : last3;
  return (num2 < 0 ? "-" : "") + grouped + (dec ? "." + dec : "");
}
function fmtDate(d) {
  if (!d) return "-";
  const str = String(d).trim();
  if (/^\d{8}$/.test(str)) {
    return `${str.slice(6, 8)}-${str.slice(4, 6)}-${str.slice(0, 4)}`;
  }
  const iso = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[3]}-${iso[2]}-${iso[1]}`;
  const dmy = str.match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
  if (dmy) return `${dmy[1]}-${dmy[2]}-${dmy[3]}`;
  return str;
}
function todayIst() {
  const ist = new Date(Date.now() + 5.5 * 60 * 60 * 1e3);
  return `${String(ist.getUTCDate()).padStart(2, "0")}-${String(ist.getUTCMonth() + 1).padStart(2, "0")}-${ist.getUTCFullYear()}`;
}
function parseApiDate(d) {
  if (!d) return null;
  const str = String(d).trim();
  let y;
  let m;
  let day;
  if (/^\d{8}$/.test(str)) {
    y = str.slice(0, 4);
    m = str.slice(4, 6);
    day = str.slice(6, 8);
  } else {
    const iso = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
    const dmy = str.match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
    if (iso) {
      y = iso[1];
      m = iso[2];
      day = iso[3];
    } else if (dmy) {
      y = dmy[3];
      m = dmy[2];
      day = dmy[1];
    } else {
      return null;
    }
  }
  const date = new Date(Number(y), Number(m) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}
function num(v) {
  const n = Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

// src/app/core/services/cif-mock.data.ts
var MOCK_CIFS = [
  { id: "1", cifNo: "CIF-000101", name: "\u0AB0\u0AAE\u0AC7\u0AB6\u0AAD\u0ABE\u0A88 \u0AAA\u0A9F\u0AC7\u0AB2", village: "\u0AAC\u0ABE\u0AAC\u0AB0\u0ABE" },
  { id: "2", cifNo: "CIF-000102", name: "\u0AB8\u0AC1\u0AB0\u0AC7\u0AB6\u0AAD\u0ABE\u0A88 \u0AB6\u0ABE\u0AB9", village: "\u0A85\u0AAA\u0AB0\u0ABE\u0AAA\u0AB0\u0ABE" }
];
var MOCK_DASHBOARDS = {
  "1": {
    cifId: "1",
    member: {
      sabhasad_no: "CIF-000101",
      name1: "\u0AB0\u0AAE\u0AC7\u0AB6\u0AAD\u0ABE\u0A88 \u0AAA\u0A9F\u0AC7\u0AB2",
      share_amount: 1e4,
      savings_amount: 1500500,
      fd_amount: 4400500,
      dhiran_amount: 551e4,
      divi_amount: 0,
      hector_are: 10.0394,
      varsdar_name1: "\u0A95\u0ABF\u0AB0\u0AA3\u0AAD\u0ABE\u0A88 \u0AAA\u0A9F\u0AC7\u0AB2",
      varsdar_relation: "\u0AAA\u0AC1\u0AA4\u0ACD\u0AB0",
      kcc_no: "KCC-101",
      bank_acc: "1234567890",
      ifsc: "SBIN0001234",
      v_name: "\u0AAC\u0ABE\u0AAC\u0AB0\u0ABE"
    },
    share: { balance: 1e4, dividend: 0, accounts: [{ acc_no: "101", Balance: 1e4, h_name: "\u0AB6\u0AC7\u0AB0" }] },
    savings: {
      totalAccounts: 2,
      totalBalance: 1500500,
      accounts: [
        { acc_no: "S-201", Balance: 900500, h_name: "\u0AAC\u0A9A\u0AA4" },
        { acc_no: "S-202", Balance: 6e5, h_name: "\u0AB0\u0ABF\u0A95\u0AB0\u0ABF\u0A82\u0A97" }
      ]
    },
    loan: {
      loanRef: "10300",
      totalOutstanding: 551e4,
      duePrincipal: 1e4,
      dueInterest: 3e3,
      asOf: todayIst(),
      dueAccounts: [
        {
          acc_no: "10300",
          h_name: "\u0A95\u0AC3\u0AB7\u0ABF \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3",
          pak1_name: "\u0A98\u0A89\u0A82",
          Balance: 551e4,
          demand: 1e4,
          vyajbaki: 3e3,
          due_date: "20261030"
        }
      ],
      allAccounts: [
        {
          acc_no: "10300",
          h_name: "\u0A95\u0AC3\u0AB7\u0ABF \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3",
          pak1_name: "\u0A98\u0A89\u0A82",
          Balance: 551e4,
          demand: 1e4,
          vyajbaki: 3e3,
          due_date: "20261030"
        }
      ]
    },
    fd: {
      totalReceipts: 5,
      totalBalance: 4400500,
      maturingReceipts: 3,
      accounts: [
        {
          acc_no: "F-1",
          Balance: 1e6,
          other_data1: "FD001,20240101,20261115,7.5,24,0,1100000,0,\u0AB8\u0ABE\u0AAE\u0ABE\u0AA8\u0ACD\u0AAF"
        }
      ]
    },
    land: {
      totalLand: "10.0394",
      sabhasadType: "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6",
      records: [
        { serial: 1, village: "\u0AAC\u0ABE\u0AAC\u0AB0\u0ABE", surveyNo: "114P3", eightANo: "1023", hectareAare: "11.0348" },
        { serial: 2, village: "\u0A85\u0AAA\u0AB0\u0ABE\u0AAA\u0AB0\u0ABE", surveyNo: "334P2", eightANo: "1224", hectareAare: "2.0348" }
      ]
    },
    loanAccounts: [
      { acc_no: "10300", h_name: "\u0A95\u0AC3\u0AB7\u0ABF \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3", Balance: 551e4, mudatvitirakam: 5e6, int_ret: 12, pak1_name: "\u0A98\u0A89\u0A82" }
    ]
  },
  "2": {
    cifId: "2",
    member: {
      sabhasad_no: "CIF-000102",
      name1: "\u0AB8\u0AC1\u0AB0\u0AC7\u0AB6\u0AAD\u0ABE\u0A88 \u0AB6\u0ABE\u0AB9",
      share_amount: 25e3,
      savings_amount: 32e4,
      fd_amount: 9e5,
      dhiran_amount: 85e4,
      divi_amount: 1500,
      hector_are: 4.201,
      v_name: "\u0A85\u0AAA\u0AB0\u0ABE\u0AAA\u0AB0\u0ABE"
    },
    share: { balance: 25e3, dividend: 1500, accounts: [{ acc_no: "102", Balance: 25e3 }] },
    savings: {
      totalAccounts: 1,
      totalBalance: 32e4,
      accounts: [{ acc_no: "S-301", Balance: 32e4, h_name: "\u0AAC\u0A9A\u0AA4" }]
    },
    loan: {
      loanRef: "10417",
      totalOutstanding: 85e4,
      duePrincipal: 25e3,
      dueInterest: 6200,
      asOf: todayIst(),
      dueAccounts: [
        { acc_no: "10417", h_name: "KCC", Balance: 85e4, demand: 25e3, vyajbaki: 6200, due_date: "20261201" }
      ],
      allAccounts: [
        { acc_no: "10417", h_name: "KCC", Balance: 85e4, demand: 25e3, vyajbaki: 6200, due_date: "20261201" }
      ]
    },
    fd: {
      totalReceipts: 2,
      totalBalance: 9e5,
      maturingReceipts: 0,
      accounts: [{ acc_no: "F-9", Balance: 9e5, other_data1: "FD009,20250101,20280101,7,36,0,1100000,0" }]
    },
    land: {
      totalLand: "4.2010",
      records: [
        { serial: 1, village: "\u0A85\u0AAA\u0AB0\u0ABE\u0AAA\u0AB0\u0ABE", surveyNo: "58P1", eightANo: "0877", hectareAare: "4.2010" }
      ]
    },
    loanAccounts: [{ acc_no: "10417", h_name: "KCC", Balance: 85e4 }]
  }
};

// src/app/core/services/cif.service.ts
var CifService = class _CifService {
  api = inject(BankingApiService);
  session = inject(SessionService);
  /** Last successfully loaded dashboard, used by detail pages. */
  lastDashboard = signal(
    null,
    ...ngDevMode ? [{ debugName: "lastDashboard" }] : (
      /* istanbul ignore next */
      []
    )
  );
  getCifList() {
    if (!this.session.isLive()) {
      return of(MOCK_CIFS).pipe(delay(250));
    }
    return this.api.listSabhasads().pipe(map((list) => list.map((s) => this.toCif(s))));
  }
  /** Reload the last selected member after a page refresh. */
  ensureDashboard() {
    const current = this.lastDashboard();
    if (current)
      return of(current);
    const id = this.session.selectedSabhasadNo();
    return id ? this.getDashboard(id).pipe(catchError(() => of(null))) : of(null);
  }
  getDashboard(cifId) {
    if (!this.session.isLive()) {
      const data = MOCK_DASHBOARDS[cifId];
      return data ? of(data).pipe(delay(300), map((d) => {
        this.lastDashboard.set(d);
        this.session.selectSabhasad(cifId);
        return d;
      })) : throwError(() => new Error(`CIF ${cifId} not found`));
    }
    return this.api.selectSabhasad(cifId).pipe(catchError(() => of(null)), switchMap((member) => forkJoin({
      share: this.api.productBalance(cifId, PRODUCT_CODES.share).pipe(catchError(() => of(null))),
      savings: this.api.productBalance(cifId, PRODUCT_CODES.savings).pipe(catchError(() => of(null))),
      fd: this.api.productBalance(cifId, PRODUCT_CODES.fd).pipe(catchError(() => of(null))),
      loan: this.api.productBalance(cifId, PRODUCT_CODES.loan).pipe(catchError(() => of(null))),
      loanDue: this.api.productBalance(cifId, PRODUCT_CODES.loanDue).pipe(catchError(() => of(null))),
      land: this.api.milkatPatrak(cifId).pipe(catchError(() => of([])))
    }).pipe(map((parts) => this.composeDashboard(cifId, member, parts)))), map((dashboard) => {
      this.lastDashboard.set(dashboard);
      this.session.selectSabhasad(cifId);
      return dashboard;
    }));
  }
  toCif(s) {
    const no = String(s.sabhasad_no ?? "");
    return {
      id: no,
      cifNo: no,
      name: s.name1 || no,
      village: s.v_name || s.village
    };
  }
  composeDashboard(cifId, member, parts) {
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
        accounts: shareAccounts
      },
      savings: {
        totalAccounts: savingsAccounts.length,
        totalBalance: num(parts.savings?.total_balance ?? member?.savings_amount),
        accounts: savingsAccounts
      },
      fd: {
        totalReceipts: fdAccounts.length,
        totalBalance: num(parts.fd?.total_balance ?? member?.fd_amount),
        maturingReceipts: this.countMaturing(fdAccounts),
        accounts: fdAccounts
      },
      loan: {
        loanRef: String(firstDue?.acc_no ?? (loanDueAccounts.length || "")),
        totalOutstanding: totalOutstanding || num(member?.dhiran_amount),
        duePrincipal,
        dueInterest,
        asOf: todayIst(),
        dueAccounts,
        allAccounts: loanDueAccounts
      },
      land: this.mapLand(parts.land),
      loanAccounts
    };
  }
  countMaturing(accounts) {
    const horizon = Date.now() + 90 * 24 * 60 * 60 * 1e3;
    return accounts.filter((acc) => {
      const last = parseApiDate(parseFdData(acc.other_data1).last_date);
      return last != null && last.getTime() <= horizon;
    }).length;
  }
  mapLand(rows) {
    const records = rows.map((row, i) => ({
      serial: i + 1,
      village: row.v_name || "-",
      surveyNo: String(row.sarve_no || "-"),
      eightANo: String(row.mam_no || "-"),
      hectareAare: num(row.hector_are).toFixed(4)
    }));
    const total = rows.reduce((s, r) => s + num(r.hector_are), 0);
    return {
      totalLand: total.toFixed(4),
      sabhasadType: rows[0]?.sabhasad_type,
      records
    };
  }
  static \u0275fac = function CifService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CifService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CifService, factory: _CifService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CifService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/pipes/inr-number.pipe.ts
var InrNumberPipe = class _InrNumberPipe {
  transform(value, decimals = 0) {
    return value == null || value === "" ? "" : fmtInr(value, decimals);
  }
  static \u0275fac = function InrNumberPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InrNumberPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "inrNumber", type: _InrNumberPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InrNumberPipe, [{
    type: Pipe,
    args: [{ name: "inrNumber" }]
  }], null, null);
})();

export {
  parseFdData,
  fdTermLabel,
  fmtDate,
  num,
  CifService,
  InrNumberPipe
};
//# debugId=86ab7e6e-b3eb-5f4a-9488-9c46f4e88c73
//# sourceMappingURL=chunk-ZI3SXC76.js.map

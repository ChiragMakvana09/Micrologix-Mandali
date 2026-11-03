import {
  PacsDatePipe
} from "./chunk-UW3NL477.js";
import {
  StatCard,
  StatRow
} from "./chunk-BOXNZLFD.js";
import {
  CifService,
  InrNumberPipe,
  num,
  parseFdData
} from "./chunk-ZI3SXC76.js";
import {
  BankingApiService,
  PRODUCT_CODES,
  PRODUCT_LABELS
} from "./chunk-73B52QV6.js";
import {
  ActivatedRoute,
  Component,
  RouterLink,
  SessionService,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7S7ANFFG.js";

// src/app/features/transactions/transactions.ts
var _c0 = () => [];
var _c1 = (a0, a1) => ["/transactions", a0, a1];
var _c2 = (a0) => ["/transactions", a0];
function Transactions_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "\u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.");
    \u0275\u0275elementEnd();
  }
}
function Transactions_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.fdNo());
  }
}
function Transactions_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "pacsDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "inrNumber");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext(2).txAmount(row_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, row_r2.date1 || row_r2.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r2.remark || "");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", t_r3.typ === "Cr")("text-danger", t_r3.typ === "Dr");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u20B9", \u0275\u0275pipeBind2(9, 10, t_r3.amt, 2), " ", t_r3.typ, " ");
  }
}
function Transactions_Conditional_4_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "\u0A95\u0ACB\u0A88 \u0A9F\u0ACD\u0AB0\u0ABE\u0AA8\u0ACD\u0A9D\u0AC7\u0A95\u0ACD\u0AB6\u0AA8 \u0AAE\u0AB3\u0ACD\u0AAF\u0ABE\u0A82 \u0AA8\u0AA5\u0AC0.");
    \u0275\u0275elementEnd();
  }
}
function Transactions_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-stat-card", 5);
    \u0275\u0275element(1, "app-stat-row", 6);
    \u0275\u0275conditionalCreate(2, Transactions_Conditional_4_Conditional_2_Template, 1, 1, "app-stat-row", 7);
    \u0275\u0275element(3, "app-stat-row", 8);
    \u0275\u0275pipe(4, "inrNumber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275repeaterCreate(6, Transactions_Conditional_4_For_7_Template, 10, 13, "div", 10, \u0275\u0275repeaterTrackByIndex, false, Transactions_Conditional_4_ForEmpty_8_Template, 2, 0, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 11);
    \u0275\u0275text(10, "\u0AAC\u0AC0\u0A9C\u0AC1\u0A82 \u0A96\u0ABE\u0AA4\u0AC1\u0A82");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.statementTitle());
    \u0275\u0275advance();
    \u0275\u0275property("value", st_r4.acc_no || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fdNo() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind2(4, 5, st_r4.balance, 2));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(st_r4.data || \u0275\u0275pureFunction0(8, _c0));
  }
}
function Transactions_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(2, _c1, ctx_r0.productKey(), $index_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pickLabel(acc_r5), " ");
  }
}
function Transactions_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F \u0AAE\u0ABE\u0A9F\u0AC7 \u0A96\u0ABE\u0AA4\u0AC1\u0A82 \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275repeaterCreate(3, Transactions_Conditional_5_For_4_Template, 2, 5, "a", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.selectedAccounts());
  }
}
function Transactions_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, key_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.labels[key_r7]);
  }
}
function Transactions_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275repeaterCreate(3, Transactions_Conditional_6_For_4_Template, 2, 4, "a", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.products);
  }
}
function Transactions_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "\u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7\u2026");
    \u0275\u0275elementEnd();
  }
}
function Transactions_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var STATEMENT_PRODUCTS = ["share", "savings", "fd", "loan"];
var SLUG_TO_KEY = {
  share: "share",
  savings: "savings",
  fd: "fd",
  loan: "loan"
};
var Transactions = class _Transactions {
  route = inject(ActivatedRoute);
  cifService = inject(CifService);
  api = inject(BankingApiService);
  session = inject(SessionService);
  dashboard = this.cifService.lastDashboard;
  products = STATEMENT_PRODUCTS;
  labels = PRODUCT_LABELS;
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    "",
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statement = signal(
    null,
    ...ngDevMode ? [{ debugName: "statement" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fdNo = signal(
    "",
    ...ngDevMode ? [{ debugName: "fdNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productKey = signal(
    "",
    ...ngDevMode ? [{ debugName: "productKey" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.route.paramMap.pipe(switchMap((params) => this.cifService.ensureDashboard().pipe(switchMap(() => of(params))))).subscribe((params) => {
      const key = SLUG_TO_KEY[params.get("product") || ""] ?? "";
      const acc = Number(params.get("acc") ?? -1);
      this.productKey.set(key);
      this.statement.set(null);
      this.error.set("");
      this.fdNo.set("");
      if (key && acc >= 0) {
        this.loadStatement(key, acc);
      }
    });
  }
  statementTitle() {
    const key = this.productKey();
    return key ? this.labels[key] : "\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F";
  }
  selectedAccounts() {
    return this.accountsFor(this.productKey());
  }
  pickLabel(acc) {
    const key = this.productKey();
    return key ? this.accLabel(key, acc) : "";
  }
  accountsFor(key) {
    const d = this.dashboard();
    if (!d || !key)
      return [];
    if (key === "share")
      return d.share.accounts;
    if (key === "savings")
      return d.savings.accounts;
    if (key === "fd")
      return d.fd.accounts;
    if (key === "loan")
      return d.loanAccounts;
    return [];
  }
  accLabel(key, acc) {
    if (key === "fd") {
      const fd = parseFdData(acc.other_data1).fdr_no;
      return fd ? `FDR ${fd}` : `\u0A96\u0ABE\u0AA4\u0ABE ${acc.acc_no}`;
    }
    return `\u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82. ${acc.acc_no}`;
  }
  loadStatement(key, index) {
    const d = this.dashboard();
    const acc = this.accountsFor(key)[index];
    if (!d)
      return;
    if (!this.session.isLive()) {
      this.statement.set({
        acc_no: acc?.acc_no ?? d.cifId,
        balance: key === "share" ? d.share.balance : key === "savings" ? d.savings.totalBalance : num(acc?.Balance),
        data: [
          { date1: "20261020", total_cr: 5e3, total_dr: 0, remark: "\u0A9C\u0AAE\u0ABE" },
          { date1: "20261012", total_cr: 0, total_dr: 1200, remark: "\u0A89\u0AAA\u0ABE\u0AA1" }
        ]
      });
      if (key === "fd" && acc)
        this.fdNo.set(parseFdData(acc.other_data1).fdr_no);
      return;
    }
    this.loading.set(true);
    if (key === "fd" && acc)
      this.fdNo.set(parseFdData(acc.other_data1).fdr_no);
    this.api.miniStatement(d.cifId, PRODUCT_CODES[key], acc).pipe(catchError((err) => {
      this.error.set(err.message || "\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F \u0AAE\u0AB3\u0AC0 \u0AA8\u0AA5\u0AC0.");
      return of(null);
    })).subscribe((data) => {
      this.loading.set(false);
      this.statement.set(data);
    });
  }
  txAmount(row) {
    const credit = num(row.total_cr);
    const debit = num(row.total_dr);
    return credit > 0 ? { amt: credit, typ: "Cr" } : { amt: debit, typ: "Dr" };
  }
  static \u0275fac = function Transactions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Transactions)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Transactions, selectors: [["app-transactions"]], decls: 9, vars: 3, consts: [[1, "tx"], [1, "section-title"], [1, "text-center", "text-secondary", "py-4"], [1, "text-center", "text-secondary", "py-3"], [1, "text-danger"], ["icon", "receipt", 3, "title"], ["label", "\u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82.", 3, "value"], ["label", "FDR No.", 3, "value"], ["label", "\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8", 3, "value"], [1, "tx__list"], [1, "tx__item"], ["routerLink", "/transactions"], [1, "text-secondary"], [1, "tx__grid"], [1, "tx__pick", 3, "routerLink"]], template: function Transactions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "\u0AB5\u0ACD\u0AAF\u0AB5\u0AB9\u0ABE\u0AB0\u0ACB / \u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, Transactions_Conditional_3_Template, 2, 0, "p", 2)(4, Transactions_Conditional_4_Template, 11, 9)(5, Transactions_Conditional_5_Template, 5, 0)(6, Transactions_Conditional_6_Template, 5, 0);
      \u0275\u0275conditionalCreate(7, Transactions_Conditional_7_Template, 2, 0, "p", 3);
      \u0275\u0275conditionalCreate(8, Transactions_Conditional_8_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.dashboard() ? 3 : (tmp_0_0 = ctx.statement()) ? 4 : ctx.productKey() && ctx.selectedAccounts().length ? 5 : 6, tmp_0_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 8 : -1);
    }
  }, dependencies: [RouterLink, StatCard, StatRow, InrNumberPipe, PacsDatePipe], styles: ["\n.tx[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.tx__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: 1fr 1fr;\n}\n.tx__pick[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 4.5rem;\n  padding: 0.75rem;\n  border-radius: var(--%NS%app-radius);\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  color: var(--%NS%bs-body-color);\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\n.tx__list[_ngcontent-%COMP%] {\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  border-radius: var(--%NS%app-radius);\n  overflow: hidden;\n}\n.tx__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid var(--%NS%app-border);\n}\n.tx__item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--%NS%bs-secondary-color);\n}\n.tx__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n@media (max-width: 420px) {\n  .tx__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transactions.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Transactions, [{
    type: Component,
    args: [{ selector: "app-transactions", imports: [RouterLink, StatCard, StatRow, InrNumberPipe, PacsDatePipe], template: `<section class="tx">
  <h1 class="section-title">\u0AB5\u0ACD\u0AAF\u0AB5\u0AB9\u0ABE\u0AB0\u0ACB / \u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F</h1>

  @if (!dashboard()) {
    <p class="text-center text-secondary py-4">\u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.</p>
  } @else if (statement(); as st) {
    <app-stat-card [title]="statementTitle()" icon="receipt">
      <app-stat-row label="\u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82." [value]="st.acc_no || '-'" />
      @if (fdNo()) {
        <app-stat-row label="FDR No." [value]="fdNo()" />
      }
      <app-stat-row label="\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="st.balance | inrNumber:2" />
    </app-stat-card>

    <div class="tx__list">
      @for (row of st.data || []; track $index) {
        @let t = txAmount(row);
        <div class="tx__item">
          <div>
            <strong>{{ (row.date1 || row.date) | pacsDate }}</strong>
            <small>{{ row.remark || '' }}</small>
          </div>
          <span [class.text-success]="t.typ === 'Cr'" [class.text-danger]="t.typ === 'Dr'">
            \u20B9{{ t.amt | inrNumber:2 }} {{ t.typ }}
          </span>
        </div>
      } @empty {
        <p class="text-center text-secondary py-3">\u0A95\u0ACB\u0A88 \u0A9F\u0ACD\u0AB0\u0ABE\u0AA8\u0ACD\u0A9D\u0AC7\u0A95\u0ACD\u0AB6\u0AA8 \u0AAE\u0AB3\u0ACD\u0AAF\u0ABE\u0A82 \u0AA8\u0AA5\u0AC0.</p>
      }
    </div>
    <a routerLink="/transactions">\u0AAC\u0AC0\u0A9C\u0AC1\u0A82 \u0A96\u0ABE\u0AA4\u0AC1\u0A82</a>
  } @else if (productKey() && selectedAccounts().length) {
    <p class="text-secondary">\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F \u0AAE\u0ABE\u0A9F\u0AC7 \u0A96\u0ABE\u0AA4\u0AC1\u0A82 \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.</p>
    <div class="tx__grid">
      @for (acc of selectedAccounts(); track $index) {
        <a class="tx__pick" [routerLink]="['/transactions', productKey(), $index]">
          {{ pickLabel(acc) }}
        </a>
      }
    </div>
  } @else {
    <p class="text-secondary">\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB</p>
    <div class="tx__grid">
      @for (key of products; track key) {
        <a class="tx__pick" [routerLink]="['/transactions', key]">{{ labels[key] }}</a>
      }
    </div>
  }

  @if (loading()) {
    <p class="text-center text-secondary py-3">\u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7\u2026</p>
  }
  @if (error()) {
    <p class="text-danger">{{ error() }}</p>
  }
</section>
`, styles: ["/* src/app/features/transactions/transactions.scss */\n.tx {\n  display: grid;\n  gap: 1rem;\n}\n.tx__grid {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: 1fr 1fr;\n}\n.tx__pick {\n  display: grid;\n  place-items: center;\n  min-height: 4.5rem;\n  padding: 0.75rem;\n  border-radius: var(--app-radius);\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  color: var(--bs-body-color);\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\n.tx__list {\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  overflow: hidden;\n}\n.tx__item {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid var(--app-border);\n}\n.tx__item small {\n  display: block;\n  color: var(--bs-secondary-color);\n}\n.tx__item:last-child {\n  border-bottom: 0;\n}\n@media (max-width: 420px) {\n  .tx__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transactions.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Transactions, { className: "Transactions", filePath: "src/app/features/transactions/transactions.ts", lineNumber: 31 });
})();
export {
  Transactions
};
//# debugId=5676e3b6-f696-587e-b233-0b95ab23ad42
//# sourceMappingURL=chunk-U7RFB7MH.js.map

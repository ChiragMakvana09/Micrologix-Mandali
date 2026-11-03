import {
  LandTable,
  toSignal
} from "./chunk-7JU5TLEC.js";
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
  fdTermLabel,
  num,
  parseFdData
} from "./chunk-ZI3SXC76.js";
import {
  PRODUCT_LABELS
} from "./chunk-73B52QV6.js";
import {
  ActivatedRoute,
  Component,
  RouterLink,
  computed,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7S7ANFFG.js";

// src/app/features/product/product-page.ts
function ProductPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, " \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB. ");
    \u0275\u0275elementStart(2, "a", 3);
    \u0275\u0275text(3, "\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1");
    \u0275\u0275elementEnd()();
  }
}
function ProductPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-land-table", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.dashboard().land);
  }
}
function ProductPage_Conditional_2_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 11);
    \u0275\u0275pipe(1, "inrNumber");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(1, 1, ctx_r0.dashboard().share.dividend));
  }
}
function ProductPage_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-stat-card", 6);
    \u0275\u0275element(1, "app-stat-row", 10);
    \u0275\u0275pipe(2, "inrNumber");
    \u0275\u0275conditionalCreate(3, ProductPage_Conditional_2_Conditional_6_Conditional_3_Template, 2, 3, "app-stat-row", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(2, 2, ctx_r0.dashboard().share.balance));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.dashboard().share.dividend > 0 ? 3 : -1);
  }
}
function ProductPage_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-stat-card", 7);
    \u0275\u0275element(1, "app-stat-row", 12)(2, "app-stat-row", 13);
    \u0275\u0275pipe(3, "inrNumber");
    \u0275\u0275element(4, "app-stat-row", 14);
    \u0275\u0275pipe(5, "inrNumber");
    \u0275\u0275element(6, "app-stat-row", 15);
    \u0275\u0275pipe(7, "inrNumber");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("badge", ctx_r0.dashboard().loan.loanRef);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.dashboard().loan.asOf);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(3, 5, ctx_r0.dashboard().loan.totalOutstanding));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(5, 7, ctx_r0.dashboard().loan.duePrincipal));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(7, 9, ctx_r0.dashboard().loan.dueInterest, 2));
  }
}
function ProductPage_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "\u0A86 \u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F \u0AAE\u0ABE\u0A9F\u0AC7 \u0A95\u0ACB\u0A88 \u0A96\u0ABE\u0AA4\u0AC1\u0A82 \u0AAE\u0AB3\u0ACD\u0AAF\u0AC1\u0A82 \u0AA8\u0AA5\u0AC0.");
    \u0275\u0275elementEnd();
  }
}
function ProductPage_Conditional_2_For_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 17);
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", acc_r2.h_name);
  }
}
function ProductPage_Conditional_2_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 10);
    \u0275\u0275pipe(1, "inrNumber");
    \u0275\u0275conditionalCreate(2, ProductPage_Conditional_2_For_10_Conditional_1_Conditional_2_Template, 1, 1, "app-stat-row", 17);
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(1, 2, ctx_r0.balance(acc_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(acc_r2.h_name ? 2 : -1);
  }
}
function ProductPage_Conditional_2_For_10_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 24);
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.fd(acc_r2).fd_type);
  }
}
function ProductPage_Conditional_2_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 18)(1, "app-stat-row", 19);
    \u0275\u0275pipe(2, "pacsDate");
    \u0275\u0275element(3, "app-stat-row", 20);
    \u0275\u0275pipe(4, "inrNumber");
    \u0275\u0275element(5, "app-stat-row", 21)(6, "app-stat-row", 22);
    \u0275\u0275pipe(7, "pacsDate");
    \u0275\u0275element(8, "app-stat-row", 23);
    \u0275\u0275pipe(9, "inrNumber");
    \u0275\u0275conditionalCreate(10, ProductPage_Conditional_2_For_10_Conditional_2_Conditional_10_Template, 1, 1, "app-stat-row", 24);
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.fd(acc_r2).fdr_no || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(2, 7, ctx_r0.fd(acc_r2).first_date));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(4, 9, ctx_r0.balance(acc_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.term(acc_r2) + " @" + ctx_r0.fd(acc_r2).interest + "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(7, 11, ctx_r0.fd(acc_r2).last_date));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(9, 13, ctx_r0.fd(acc_r2).total_amount));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.fd(acc_r2).fd_type ? 10 : -1);
  }
}
function ProductPage_Conditional_2_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 17)(1, "app-stat-row", 25)(2, "app-stat-row", 26);
    \u0275\u0275pipe(3, "inrNumber");
    \u0275\u0275element(4, "app-stat-row", 27);
    \u0275\u0275pipe(5, "inrNumber");
    \u0275\u0275element(6, "app-stat-row", 28);
    \u0275\u0275pipe(7, "pacsDate");
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", (acc_r2.h_name || "-") + " (" + (acc_r2.int_ret || "-") + "%)");
    \u0275\u0275advance();
    \u0275\u0275property("value", acc_r2.pak1_name || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(3, 5, ctx_r0.balance(acc_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(5, 7, acc_r2.mudatvitirakam));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(7, 9, acc_r2.due_date_from || acc_r2.due_date));
  }
}
function ProductPage_Conditional_2_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 17)(1, "app-stat-row", 25)(2, "app-stat-row", 26);
    \u0275\u0275pipe(3, "inrNumber");
    \u0275\u0275element(4, "app-stat-row", 29);
    \u0275\u0275pipe(5, "inrNumber");
    \u0275\u0275element(6, "app-stat-row", 30);
    \u0275\u0275pipe(7, "inrNumber");
    \u0275\u0275element(8, "app-stat-row", 31);
    \u0275\u0275pipe(9, "pacsDate");
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", acc_r2.h_name || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", acc_r2.pak1_name || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(3, 6, ctx_r0.balance(acc_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(5, 8, acc_r2.demand));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(7, 10, acc_r2.vyajbaki, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(9, 13, acc_r2.due_date));
  }
}
function ProductPage_Conditional_2_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1, "\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const acc_r2 = ctx_r2.$implicit;
    const $index_r4 = ctx_r2.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.statementLink(acc_r2, $index_r4));
  }
}
function ProductPage_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-stat-card", 9);
    \u0275\u0275conditionalCreate(1, ProductPage_Conditional_2_For_10_Conditional_1_Template, 3, 4);
    \u0275\u0275conditionalCreate(2, ProductPage_Conditional_2_For_10_Conditional_2_Template, 11, 15);
    \u0275\u0275conditionalCreate(3, ProductPage_Conditional_2_For_10_Conditional_3_Template, 8, 11);
    \u0275\u0275conditionalCreate(4, ProductPage_Conditional_2_For_10_Conditional_4_Template, 10, 15);
    \u0275\u0275conditionalCreate(5, ProductPage_Conditional_2_For_10_Conditional_5_Template, 2, 1, "a", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", "\u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82. " + ctx_r0.accNo(acc_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() === "savings" || ctx_r0.key() === "share" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() === "fd" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() === "loan" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() === "loanDue" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() !== "loanDue" && ctx_r0.key() !== "milkat" ? 5 : -1);
  }
}
function ProductPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 4)(2, "h1", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "\u0AAA\u0ABE\u0A9B\u0ABE");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ProductPage_Conditional_2_Conditional_6_Template, 4, 4, "app-stat-card", 6);
    \u0275\u0275conditionalCreate(7, ProductPage_Conditional_2_Conditional_7_Template, 8, 12, "app-stat-card", 7);
    \u0275\u0275conditionalCreate(8, ProductPage_Conditional_2_Conditional_8_Template, 2, 0, "p", 8);
    \u0275\u0275repeaterCreate(9, ProductPage_Conditional_2_For_10_Template, 6, 6, "app-stat-card", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.key() === "share" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.key() === "loanDue" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.accounts().length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.accounts());
  }
}
var SLUG_TO_KEY = {
  share: "share",
  savings: "savings",
  fd: "fd",
  loan: "loan",
  "loan-due": "loanDue",
  land: "milkat"
};
var ProductPage = class _ProductPage {
  cifService = inject(CifService);
  route = inject(ActivatedRoute);
  key = toSignal(this.route.paramMap.pipe(map((p) => SLUG_TO_KEY[p.get("key") || "share"] ?? "share")), { initialValue: "share" });
  dashboard = this.cifService.lastDashboard;
  title = computed(
    () => PRODUCT_LABELS[this.key()] ?? this.key(),
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }
  accounts = computed(
    () => {
      const d = this.dashboard();
      if (!d)
        return [];
      switch (this.key()) {
        case "share":
          return d.share.accounts;
        case "savings":
          return d.savings.accounts;
        case "fd":
          return d.fd.accounts;
        case "loan":
          return d.loanAccounts;
        case "loanDue":
          return d.loan.allAccounts;
        default:
          return [];
      }
    },
    ...ngDevMode ? [{ debugName: "accounts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  accNo(acc) {
    return String(acc.acc_no ?? "");
  }
  balance(acc) {
    return num(acc.Balance ?? acc.balance);
  }
  fd(acc) {
    return parseFdData(acc.other_data1);
  }
  term(acc) {
    return fdTermLabel(this.fd(acc));
  }
  statementLink(_acc, index) {
    const slug = this.key() === "loanDue" ? "loan" : this.key();
    return ["/transactions", slug, String(index)];
  }
  static \u0275fac = function ProductPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductPage, selectors: [["app-product-page"]], decls: 3, vars: 1, consts: [[1, "text-center", "text-secondary", "py-5"], [3, "data"], [1, "product-page"], ["routerLink", "/dashboard"], [1, "product-page__head"], [1, "section-title"], ["title", "\u0AB6\u0AC7\u0AB0", "icon", "pie-chart-fill"], ["title", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3", "icon", "cash-coin", 3, "badge"], [1, "text-center", "text-secondary", "py-4"], ["icon", "wallet2", 3, "title"], ["label", "\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8", 3, "value"], ["label", "\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1", 3, "value"], ["label", "\u0AA4\u0ABE\u0AB0\u0AC0\u0A96 \u0AB8\u0AC1\u0AA7\u0AC0", 3, "value"], ["label", "\u0A95\u0AC1\u0AB2 \u0AAC\u0ABE\u0A95\u0AC0", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AAE\u0AC1\u0AA6\u0AB2", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AB5\u0ACD\u0AAF\u0ABE\u0A9C", 3, "value"], [1, "product-page__link", 3, "routerLink"], ["label", "\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F", 3, "value"], ["label", "FDR No.", 3, "value"], ["label", "FD \u0AA4\u0ABE\u0AB0\u0AC0\u0A96", 3, "value"], ["label", "FD \u0AB0\u0A95\u0AAE", 3, "value"], ["label", "\u0AAE\u0AC1\u0AA6\u0AA4", 3, "value"], ["label", "\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AA4\u0ABE\u0AB0\u0AC0\u0A96", 3, "value"], ["label", "\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AB0\u0A95\u0AAE", 3, "value"], ["label", "FD \u0AAA\u0ACD\u0AB0\u0A95\u0ABE\u0AB0", 3, "value"], ["label", "\u0AB9\u0AC7\u0AA4\u0AC1", 3, "value"], ["label", "\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3 \u0AAC\u0ABE\u0A95\u0AC0", 3, "value"], ["label", "\u0AAE\u0AC1\u0AB5\u0AC0 \u0AB0\u0A95\u0AAE", 3, "value"], ["label", "\u0AAE\u0AC1\u0AB5\u0AC0 \u0AA4\u0ABE\u0AB0\u0AC0\u0A96", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3", 3, "value"], ["label", "\u0AB5\u0ACD\u0AAF\u0ABE\u0A9C", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AA8\u0AC0 \u0AA4\u0ABE.", 3, "value"]], template: function ProductPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductPage_Conditional_0_Template, 4, 0, "p", 0)(1, ProductPage_Conditional_1_Template, 1, 1, "app-land-table", 1)(2, ProductPage_Conditional_2_Template, 11, 4, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.dashboard() ? 0 : ctx.key() === "milkat" ? 1 : 2);
    }
  }, dependencies: [RouterLink, StatCard, StatRow, LandTable, InrNumberPipe, PacsDatePipe], styles: ["\n.product-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.product-page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-page__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.6rem;\n  font-weight: 600;\n  color: var(--%NS%app-primary);\n  text-decoration: none;\n}\n/*# sourceMappingURL=product-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductPage, [{
    type: Component,
    args: [{ selector: "app-product-page", imports: [RouterLink, StatCard, StatRow, InrNumberPipe, PacsDatePipe, LandTable], template: `@if (!dashboard()) {
  <p class="text-center text-secondary py-5">
    \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.
    <a routerLink="/dashboard">\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1</a>
  </p>
} @else if (key() === 'milkat') {
  <app-land-table [data]="dashboard()!.land" />
} @else {
  <div class="product-page">
    <header class="product-page__head">
      <h1 class="section-title">{{ title() }}</h1>
      <a routerLink="/dashboard">\u0AAA\u0ABE\u0A9B\u0ABE</a>
    </header>

    @if (key() === 'share') {
      <app-stat-card title="\u0AB6\u0AC7\u0AB0" icon="pie-chart-fill">
        <app-stat-row label="\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="dashboard()!.share.balance | inrNumber" />
        @if (dashboard()!.share.dividend > 0) {
          <app-stat-row label="\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1" [value]="dashboard()!.share.dividend | inrNumber" />
        }
      </app-stat-card>
    }

    @if (key() === 'loanDue') {
      <app-stat-card title="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3" icon="cash-coin" [badge]="dashboard()!.loan.loanRef">
        <app-stat-row label="\u0AA4\u0ABE\u0AB0\u0AC0\u0A96 \u0AB8\u0AC1\u0AA7\u0AC0" [value]="dashboard()!.loan.asOf" />
        <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0AAC\u0ABE\u0A95\u0AC0" [value]="dashboard()!.loan.totalOutstanding | inrNumber" />
        <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AAE\u0AC1\u0AA6\u0AB2" [value]="dashboard()!.loan.duePrincipal | inrNumber" />
        <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AB5\u0ACD\u0AAF\u0ABE\u0A9C" [value]="dashboard()!.loan.dueInterest | inrNumber:2" />
      </app-stat-card>
    }

    @if (accounts().length === 0) {
      <p class="text-center text-secondary py-4">\u0A86 \u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F \u0AAE\u0ABE\u0A9F\u0AC7 \u0A95\u0ACB\u0A88 \u0A96\u0ABE\u0AA4\u0AC1\u0A82 \u0AAE\u0AB3\u0ACD\u0AAF\u0AC1\u0A82 \u0AA8\u0AA5\u0AC0.</p>
    }

    @for (acc of accounts(); track $index) {
      <app-stat-card [title]="'\u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82. ' + accNo(acc)" icon="wallet2">
        @if (key() === 'savings' || key() === 'share') {
          <app-stat-row label="\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="balance(acc) | inrNumber" />
          @if (acc.h_name) {
            <app-stat-row label="\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F" [value]="acc.h_name" />
          }
        }

        @if (key() === 'fd') {
          <app-stat-row label="FDR No." [value]="fd(acc).fdr_no || 'N/A'" />
          <app-stat-row label="FD \u0AA4\u0ABE\u0AB0\u0AC0\u0A96" [value]="fd(acc).first_date | pacsDate" />
          <app-stat-row label="FD \u0AB0\u0A95\u0AAE" [value]="balance(acc) | inrNumber" />
          <app-stat-row label="\u0AAE\u0AC1\u0AA6\u0AA4" [value]="term(acc) + ' @' + fd(acc).interest + '%'" />
          <app-stat-row label="\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AA4\u0ABE\u0AB0\u0AC0\u0A96" [value]="fd(acc).last_date | pacsDate" />
          <app-stat-row label="\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AB0\u0A95\u0AAE" [value]="fd(acc).total_amount | inrNumber" />
          @if (fd(acc).fd_type) {
            <app-stat-row label="FD \u0AAA\u0ACD\u0AB0\u0A95\u0ABE\u0AB0" [value]="fd(acc).fd_type" />
          }
        }

        @if (key() === 'loan') {
          <app-stat-row label="\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F" [value]="(acc.h_name || '-') + ' (' + (acc.int_ret || '-') + '%)'" />
          <app-stat-row label="\u0AB9\u0AC7\u0AA4\u0AC1" [value]="acc.pak1_name || '-'" />
          <app-stat-row label="\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3 \u0AAC\u0ABE\u0A95\u0AC0" [value]="balance(acc) | inrNumber" />
          <app-stat-row label="\u0AAE\u0AC1\u0AB5\u0AC0 \u0AB0\u0A95\u0AAE" [value]="acc.mudatvitirakam | inrNumber" />
          <app-stat-row label="\u0AAE\u0AC1\u0AB5\u0AC0 \u0AA4\u0ABE\u0AB0\u0AC0\u0A96" [value]="(acc.due_date_from || acc.due_date) | pacsDate" />
        }

        @if (key() === 'loanDue') {
          <app-stat-row label="\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F" [value]="acc.h_name || '-'" />
          <app-stat-row label="\u0AB9\u0AC7\u0AA4\u0AC1" [value]="acc.pak1_name || '-'" />
          <app-stat-row label="\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3 \u0AAC\u0ABE\u0A95\u0AC0" [value]="balance(acc) | inrNumber" />
          <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3" [value]="acc.demand | inrNumber" />
          <app-stat-row label="\u0AB5\u0ACD\u0AAF\u0ABE\u0A9C" [value]="acc.vyajbaki | inrNumber:2" />
          <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AA8\u0AC0 \u0AA4\u0ABE." [value]="acc.due_date | pacsDate" />
        }

        @if (key() !== 'loanDue' && key() !== 'milkat') {
          <a class="product-page__link" [routerLink]="statementLink(acc, $index)">\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F</a>
        }
      </app-stat-card>
    }
  </div>
}
`, styles: ["/* src/app/features/product/product-page.scss */\n.product-page {\n  display: grid;\n  gap: 1rem;\n}\n.product-page__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-page__link {\n  display: inline-block;\n  margin-top: 0.6rem;\n  font-weight: 600;\n  color: var(--app-primary);\n  text-decoration: none;\n}\n/*# sourceMappingURL=product-page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductPage, { className: "ProductPage", filePath: "src/app/features/product/product-page.ts", lineNumber: 31 });
})();
export {
  ProductPage
};
//# debugId=fb598c1b-5b50-58b6-8ced-241ac495354b
//# sourceMappingURL=chunk-NX7UWYF6.js.map

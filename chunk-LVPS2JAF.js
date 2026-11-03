import {
  CifService,
  InrNumberPipe
} from "./chunk-ZI3SXC76.js";
import {
  PRODUCT_LABELS
} from "./chunk-73B52QV6.js";
import {
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7S7ANFFG.js";

// src/app/features/cards/cards.ts
function Cards_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "inrNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 4)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "inrNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 5)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "inrNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 6)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "inrNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "a", 7)(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "inrNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a", 8)(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.labels.share);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(5, 12, d_r1.share.balance));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labels.savings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(11, 14, d_r1.savings.totalBalance));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labels.fd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(17, 16, d_r1.fd.totalBalance));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labels.loan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(23, 18, d_r1.loan.totalOutstanding));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labels.loanDue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(29, 20, d_r1.loan.duePrincipal + d_r1.loan.dueInterest));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labels.milkat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.land.totalLand);
  }
}
function Cards_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "\u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.");
    \u0275\u0275elementEnd();
  }
}
var Cards = class _Cards {
  cifService = inject(CifService);
  dashboard = this.cifService.lastDashboard;
  labels = PRODUCT_LABELS;
  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }
  static \u0275fac = function Cards_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cards)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cards, selectors: [["app-cards"]], decls: 5, vars: 1, consts: [[1, "cards"], [1, "section-title"], [1, "text-center", "text-secondary", "py-4"], ["routerLink", "/products/share", 1, "cards__item"], ["routerLink", "/products/savings", 1, "cards__item"], ["routerLink", "/products/fd", 1, "cards__item"], ["routerLink", "/products/loan", 1, "cards__item"], ["routerLink", "/products/loan-due", 1, "cards__item"], ["routerLink", "/products/land", 1, "cards__item"]], template: function Cards_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "\u0A95\u0ABE\u0AB0\u0ACD\u0AA1\u0ACD\u0AB8");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, Cards_Conditional_3_Template, 35, 22)(4, Cards_Conditional_4_Template, 2, 0, "p", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_0_0 = ctx.dashboard()) ? 3 : 4, tmp_0_0);
    }
  }, dependencies: [RouterLink, InrNumberPipe], styles: ["\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n}\n.cards__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  min-height: 4.25rem;\n  padding: 1rem 1.1rem;\n  border-radius: var(--%NS%app-radius);\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  box-shadow: var(--%NS%app-shadow);\n  color: var(--%NS%bs-body-color);\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (min-width: 768px) {\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=cards.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cards, [{
    type: Component,
    args: [{ selector: "app-cards", imports: [RouterLink, InrNumberPipe], template: '<section class="cards">\n  <h1 class="section-title">\u0A95\u0ABE\u0AB0\u0ACD\u0AA1\u0ACD\u0AB8</h1>\n\n  @if (dashboard(); as d) {\n    <a class="cards__item" routerLink="/products/share">\n      <span>{{ labels.share }}</span>\n      <strong>\u20B9 {{ d.share.balance | inrNumber }}</strong>\n    </a>\n    <a class="cards__item" routerLink="/products/savings">\n      <span>{{ labels.savings }}</span>\n      <strong>\u20B9 {{ d.savings.totalBalance | inrNumber }}</strong>\n    </a>\n    <a class="cards__item" routerLink="/products/fd">\n      <span>{{ labels.fd }}</span>\n      <strong>\u20B9 {{ d.fd.totalBalance | inrNumber }}</strong>\n    </a>\n    <a class="cards__item" routerLink="/products/loan">\n      <span>{{ labels.loan }}</span>\n      <strong>\u20B9 {{ d.loan.totalOutstanding | inrNumber }}</strong>\n    </a>\n    <a class="cards__item" routerLink="/products/loan-due">\n      <span>{{ labels.loanDue }}</span>\n      <strong>\u20B9 {{ (d.loan.duePrincipal + d.loan.dueInterest) | inrNumber }}</strong>\n    </a>\n    <a class="cards__item" routerLink="/products/land">\n      <span>{{ labels.milkat }}</span>\n      <strong>{{ d.land.totalLand }}</strong>\n    </a>\n  } @else {\n    <p class="text-center text-secondary py-4">\u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.</p>\n  }\n</section>\n', styles: ["/* src/app/features/cards/cards.scss */\n.cards {\n  display: grid;\n  gap: 0.85rem;\n}\n.cards__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  min-height: 4.25rem;\n  padding: 1rem 1.1rem;\n  border-radius: var(--app-radius);\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  box-shadow: var(--app-shadow);\n  color: var(--bs-body-color);\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (min-width: 768px) {\n  .cards {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=cards.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cards, { className: "Cards", filePath: "src/app/features/cards/cards.ts", lineNumber: 13 });
})();
export {
  Cards
};
//# debugId=6db531dd-a2ab-54f5-a85c-78160acc6322
//# sourceMappingURL=chunk-LVPS2JAF.js.map

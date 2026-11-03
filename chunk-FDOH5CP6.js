import {
  LandTable,
  toObservable,
  toSignal
} from "./chunk-7JU5TLEC.js";
import {
  StatCard,
  StatRow
} from "./chunk-BOXNZLFD.js";
import {
  CifService,
  InrNumberPipe
} from "./chunk-ZI3SXC76.js";
import "./chunk-73B52QV6.js";
import {
  Component,
  Input,
  Output,
  RouterLink,
  SessionService,
  catchError,
  effect,
  inject,
  input,
  model,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7S7ANFFG.js";

// src/app/features/dashboard/components/cif-select/cif-select.ts
var _forTrack0 = ($index, $item) => $item.id;
function CifSelect_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const cif_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", cif_r1.id)("selected", cif_r1.id === ctx_r1.selectedId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cif_r1.cifNo, " - ", cif_r1.name);
  }
}
var CifSelect = class _CifSelect {
  cifs = input.required(
    ...ngDevMode ? [{ debugName: "cifs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Selected CIF id; supports two-way binding with [(selectedId)]. */
  selectedId = model(
    "",
    ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onChange(event) {
    this.selectedId.set(event.target.value);
  }
  static \u0275fac = function CifSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CifSelect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CifSelect, selectors: [["app-cif-select"]], inputs: { cifs: [1, "cifs"], selectedId: [1, "selectedId"] }, outputs: { selectedId: "selectedIdChange" }, decls: 8, vars: 1, consts: [[1, "cif-select"], [1, "cif-select__icon"], [1, "bi", "bi-person-vcard-fill"], ["aria-label", "Select CIF", 1, "cif-select__control", 3, "change", "value"], ["value", ""], [3, "value", "selected"]], template: function CifSelect_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "label", 0)(1, "span", 1);
      \u0275\u0275domElement(2, "i", 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "select", 3);
      \u0275\u0275domListener("change", function CifSelect_Template_select_change_3_listener($event) {
        return ctx.onChange($event);
      });
      \u0275\u0275domElementStart(4, "option", 4);
      \u0275\u0275text(5, "CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(6, CifSelect_For_7_Template, 2, 4, "option", 5, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("value", ctx.selectedId());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cifs());
    }
  }, styles: ["\n.cif-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.35rem 0.6rem 0.35rem 0.9rem;\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  border-radius: var(--%NS%app-radius);\n  box-shadow: var(--%NS%app-shadow);\n}\n.cif-select__icon[_ngcontent-%COMP%] {\n  color: var(--%NS%app-primary);\n  font-size: 1.3rem;\n}\n.cif-select__control[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 2.75rem;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%bs-body-color);\n  font-size: 1.05rem;\n  font-weight: 600;\n  text-align: center;\n}\n.cif-select__control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.cif-select[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--%NS%app-primary);\n  box-shadow: 0 0 0 0.2rem var(--%NS%app-primary-soft);\n}\n/*# sourceMappingURL=cif-select.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CifSelect, [{
    type: Component,
    args: [{ selector: "app-cif-select", template: '<label class="cif-select">\n  <span class="cif-select__icon"><i class="bi bi-person-vcard-fill"></i></span>\n  <select class="cif-select__control" [value]="selectedId()" (change)="onChange($event)" aria-label="Select CIF">\n    <option value="">CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB</option>\n    @for (cif of cifs(); track cif.id) {\n      <option [value]="cif.id" [selected]="cif.id === selectedId()">{{ cif.cifNo }} - {{ cif.name }}</option>\n    }\n  </select>\n</label>\n', styles: ["/* src/app/features/dashboard/components/cif-select/cif-select.scss */\n.cif-select {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.35rem 0.6rem 0.35rem 0.9rem;\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  box-shadow: var(--app-shadow);\n}\n.cif-select__icon {\n  color: var(--app-primary);\n  font-size: 1.3rem;\n}\n.cif-select__control {\n  flex: 1;\n  min-height: 2.75rem;\n  border: 0;\n  background: transparent;\n  color: var(--bs-body-color);\n  font-size: 1.05rem;\n  font-weight: 600;\n  text-align: center;\n}\n.cif-select__control:focus {\n  outline: none;\n}\n.cif-select:focus-within {\n  border-color: var(--app-primary);\n  box-shadow: 0 0 0 0.2rem var(--app-primary-soft);\n}\n/*# sourceMappingURL=cif-select.css.map */\n"] }]
  }], null, { cifs: [{ type: Input, args: [{ isSignal: true, alias: "cifs", required: true }] }], selectedId: [{ type: Input, args: [{ isSignal: true, alias: "selectedId", required: false }] }, { type: Output, args: ["selectedIdChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CifSelect, { className: "CifSelect", filePath: "src/app/features/dashboard/components/cif-select/cif-select.ts", lineNumber: 9 });
})();

// src/app/features/dashboard/components/fd-card/fd-card.ts
var FdCard = class _FdCard {
  data = input.required(
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function FdCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FdCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FdCard, selectors: [["app-fd-card"]], inputs: { data: [1, "data"] }, decls: 5, vars: 5, consts: [["title", "\u0A8F\u0AAB.\u0AA1\u0AC0.", "icon", "safe2-fill"], ["label", "\u0A95\u0AC1\u0AB2 \u0AB0\u0AB8\u0AC0\u0AA6", 3, "value"], ["label", "\u0A95\u0AC1\u0AB2 \u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8", 3, "value"], ["label", "\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AB0\u0AB8\u0AC0\u0AA6", 3, "value"]], template: function FdCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-card", 0);
      \u0275\u0275element(1, "app-stat-row", 1)(2, "app-stat-row", 2);
      \u0275\u0275pipe(3, "inrNumber");
      \u0275\u0275element(4, "app-stat-row", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.data().totalReceipts);
      \u0275\u0275advance();
      \u0275\u0275property("value", \u0275\u0275pipeBind1(3, 3, ctx.data().totalBalance));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.data().maturingReceipts);
    }
  }, dependencies: [StatCard, StatRow, InrNumberPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FdCard, [{
    type: Component,
    args: [{
      selector: "app-fd-card",
      imports: [StatCard, StatRow, InrNumberPipe],
      template: `
    <app-stat-card title="\u0A8F\u0AAB.\u0AA1\u0AC0." icon="safe2-fill">
      <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0AB0\u0AB8\u0AC0\u0AA6" [value]="data().totalReceipts" />
      <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="data().totalBalance | inrNumber" />
      <app-stat-row label="\u0AAA\u0ABE\u0A95\u0AA4\u0AC0 \u0AB0\u0AB8\u0AC0\u0AA6" [value]="data().maturingReceipts" />
    </app-stat-card>
  `
    }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FdCard, { className: "FdCard", filePath: "src/app/features/dashboard/components/fd-card/fd-card.ts", lineNumber: 18 });
})();

// src/app/features/dashboard/components/loan-card/loan-card.ts
var LoanCard = class _LoanCard {
  data = input.required(
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function LoanCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoanCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoanCard, selectors: [["app-loan-card"]], inputs: { data: [1, "data"] }, decls: 7, vars: 11, consts: [["title", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3", "icon", "cash-coin", 3, "badge"], ["label", "\u0A95\u0AC1\u0AB2 \u0AAC\u0ABE\u0A95\u0AC0", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AAE\u0AC1\u0AA6\u0AB2", 3, "value"], ["label", "\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AB5\u0ACD\u0AAF\u0ABE\u0A9C", 3, "value"]], template: function LoanCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-card", 0);
      \u0275\u0275element(1, "app-stat-row", 1);
      \u0275\u0275pipe(2, "inrNumber");
      \u0275\u0275element(3, "app-stat-row", 2);
      \u0275\u0275pipe(4, "inrNumber");
      \u0275\u0275element(5, "app-stat-row", 3);
      \u0275\u0275pipe(6, "inrNumber");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("badge", ctx.data().loanRef);
      \u0275\u0275advance();
      \u0275\u0275property("value", \u0275\u0275pipeBind1(2, 4, ctx.data().totalOutstanding));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(4, 6, ctx.data().duePrincipal));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(6, 8, ctx.data().dueInterest, 2));
    }
  }, dependencies: [StatCard, StatRow, InrNumberPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoanCard, [{
    type: Component,
    args: [{
      selector: "app-loan-card",
      imports: [StatCard, StatRow, InrNumberPipe],
      template: `
    <app-stat-card title="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AA7\u0ABF\u0AB0\u0ABE\u0AA3" icon="cash-coin" [badge]="data().loanRef">
      <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0AAC\u0ABE\u0A95\u0AC0" [value]="data().totalOutstanding | inrNumber" />
      <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AAE\u0AC1\u0AA6\u0AB2" [value]="data().duePrincipal | inrNumber" />
      <app-stat-row label="\u0AAD\u0AB0\u0AB5\u0ABE\u0AAA\u0ABE\u0AA4\u0ACD\u0AB0 \u0AB5\u0ACD\u0AAF\u0ABE\u0A9C" [value]="data().dueInterest | inrNumber:2" />
    </app-stat-card>
  `
    }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoanCard, { className: "LoanCard", filePath: "src/app/features/dashboard/components/loan-card/loan-card.ts", lineNumber: 18 });
})();

// src/app/features/dashboard/components/savings-card/savings-card.ts
var SavingsCard = class _SavingsCard {
  data = input.required(
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function SavingsCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SavingsCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SavingsCard, selectors: [["app-savings-card"]], inputs: { data: [1, "data"] }, decls: 4, vars: 4, consts: [["title", "\u0AB8\u0AC7\u0AB5\u0ABF\u0A82\u0A97\u0ACD\u0AB8", "icon", "piggy-bank-fill"], ["label", "\u0A95\u0AC1\u0AB2 \u0A96\u0ABE\u0AA4\u0ABE", 3, "value"], ["label", "\u0A95\u0AC1\u0AB2 \u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8", 3, "value"]], template: function SavingsCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-card", 0);
      \u0275\u0275element(1, "app-stat-row", 1)(2, "app-stat-row", 2);
      \u0275\u0275pipe(3, "inrNumber");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.data().totalAccounts);
      \u0275\u0275advance();
      \u0275\u0275property("value", \u0275\u0275pipeBind1(3, 2, ctx.data().totalBalance));
    }
  }, dependencies: [StatCard, StatRow, InrNumberPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavingsCard, [{
    type: Component,
    args: [{
      selector: "app-savings-card",
      imports: [StatCard, StatRow, InrNumberPipe],
      template: `
    <app-stat-card title="\u0AB8\u0AC7\u0AB5\u0ABF\u0A82\u0A97\u0ACD\u0AB8" icon="piggy-bank-fill">
      <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0A96\u0ABE\u0AA4\u0ABE" [value]="data().totalAccounts" />
      <app-stat-row label="\u0A95\u0AC1\u0AB2 \u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="data().totalBalance | inrNumber" />
    </app-stat-card>
  `
    }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SavingsCard, { className: "SavingsCard", filePath: "src/app/features/dashboard/components/savings-card/savings-card.ts", lineNumber: 17 });
})();

// src/app/features/dashboard/components/share-card/share-card.ts
function ShareCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 2);
    \u0275\u0275pipe(1, "inrNumber");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(1, 1, ctx_r0.data().dividend));
  }
}
var ShareCard = class _ShareCard {
  data = input.required(
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ShareCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShareCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShareCard, selectors: [["app-share-card"]], inputs: { data: [1, "data"] }, decls: 4, vars: 4, consts: [["title", "\u0AB6\u0AC7\u0AB0", "icon", "pie-chart-fill"], ["label", "\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8", 3, "value"], ["label", "\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1", 3, "value"]], template: function ShareCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-card", 0);
      \u0275\u0275element(1, "app-stat-row", 1);
      \u0275\u0275pipe(2, "inrNumber");
      \u0275\u0275conditionalCreate(3, ShareCard_Conditional_3_Template, 2, 3, "app-stat-row", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", \u0275\u0275pipeBind1(2, 2, ctx.data().balance));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data().dividend > 0 ? 3 : -1);
    }
  }, dependencies: [StatCard, StatRow, InrNumberPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareCard, [{
    type: Component,
    args: [{
      selector: "app-share-card",
      imports: [StatCard, StatRow, InrNumberPipe],
      template: `
    <app-stat-card title="\u0AB6\u0AC7\u0AB0" icon="pie-chart-fill">
      <app-stat-row label="\u0AAC\u0AC7\u0AB2\u0AC7\u0AA8\u0ACD\u0AB8" [value]="data().balance | inrNumber" />
      @if (data().dividend > 0) {
        <app-stat-row label="\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1" [value]="data().dividend | inrNumber" />
      }
    </app-stat-card>
  `
    }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShareCard, { className: "ShareCard", filePath: "src/app/features/dashboard/components/share-card/share-card.ts", lineNumber: 19 });
})();

// src/app/features/dashboard/dashboard.ts
function Dashboard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275text(2, " \u0AB5\u0ABF\u0A97\u0AA4\u0ACB \u0A9C\u0ACB\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 \u0A89\u0AAA\u0AB0\u0AA5\u0AC0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB ");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275text(2, " \u0AA1\u0AC7\u0A9F\u0ABE \u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB6\u0A95\u0ACD\u0AAF\u0ACB \u0AA8\u0AA5\u0AC0. \u0AAB\u0AB0\u0AC0 \u0AAA\u0ACD\u0AB0\u0AAF\u0AA4\u0ACD\u0AA8 \u0A95\u0AB0\u0ACB. ");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div")(2, "small");
    \u0275\u0275text(3, "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r1.name1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0AA8\u0A82. ", m_r1.sabhasad_no);
  }
}
function Dashboard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Dashboard_Conditional_4_Conditional_0_Template, 9, 2, "a", 7);
    \u0275\u0275elementStart(1, "div", 8)(2, "a", 9);
    \u0275\u0275element(3, "app-share-card", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275element(5, "app-savings-card", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 12);
    \u0275\u0275element(7, "app-loan-card", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 13);
    \u0275\u0275element(9, "app-fd-card", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 14);
    \u0275\u0275element(11, "app-land-table", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const d_r2 = ctx;
    \u0275\u0275conditional((tmp_2_0 = d_r2.member) ? 0 : -1, tmp_2_0);
    \u0275\u0275advance(3);
    \u0275\u0275property("data", d_r2.share);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", d_r2.savings);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", d_r2.loan);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", d_r2.fd);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", d_r2.land);
  }
}
function Dashboard_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275text(2, " \u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7\u2026 ");
    \u0275\u0275elementEnd();
  }
}
var Dashboard = class _Dashboard {
  cifService = inject(CifService);
  session = inject(SessionService);
  cifs = toSignal(this.cifService.getCifList().pipe(catchError(() => of([]))), { initialValue: [] });
  selectedId = signal(
    this.session.selectedSabhasadNo(),
    ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      const list = this.cifs();
      if (!this.selectedId() && list.length === 1) {
        this.selectedId.set(list[0].id);
      }
    });
  }
  /**
   * undefined -> failed to load, null -> loading or nothing selected,
   * object -> loaded dashboard.
   */
  dashboard = toSignal(toObservable(this.selectedId).pipe(switchMap((id) => id ? this.cifService.getDashboard(id).pipe(startWith(null), catchError(() => of(void 0))) : of(null))), { initialValue: null });
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 6, vars: 3, consts: [[1, "dashboard"], [3, "selectedIdChange", "cifs", "selectedId"], [1, "dashboard__hint"], [1, "dashboard__hint", "text-danger"], ["role", "status", 1, "dashboard__hint"], [1, "bi", "bi-arrow-up-circle"], [1, "bi", "bi-exclamation-triangle-fill"], ["routerLink", "/member", 1, "dashboard__hero"], [1, "dashboard__grid"], ["routerLink", "/products/share", 1, "dashboard__card"], [3, "data"], ["routerLink", "/products/savings", 1, "dashboard__card"], ["routerLink", "/products/loan-due", 1, "dashboard__card"], ["routerLink", "/products/fd", 1, "dashboard__card"], ["routerLink", "/products/land", 1, "dashboard__wide", "dashboard__card"], [1, "bi", "bi-chevron-right"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-cif-select", 1);
      \u0275\u0275twoWayListener("selectedIdChange", function Dashboard_Template_app_cif_select_selectedIdChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedId, $event) || (ctx.selectedId = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, Dashboard_Conditional_2_Template, 3, 0, "p", 2)(3, Dashboard_Conditional_3_Template, 3, 0, "p", 3)(4, Dashboard_Conditional_4_Template, 12, 6)(5, Dashboard_Conditional_5_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("cifs", ctx.cifs());
      \u0275\u0275twoWayProperty("selectedId", ctx.selectedId);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.selectedId() ? 2 : ctx.dashboard() === void 0 ? 3 : (tmp_2_0 = ctx.dashboard()) ? 4 : 5, tmp_2_0);
    }
  }, dependencies: [CifSelect, ShareCard, SavingsCard, LoanCard, FdCard, LandTable, RouterLink], styles: ["\n.dashboard[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.dashboard__hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-radius: var(--%NS%app-radius);\n  background: var(--%NS%app-header-bg);\n  color: var(--%NS%app-header-fg);\n  text-decoration: none;\n  box-shadow: var(--%NS%app-shadow);\n}\n.dashboard__hero[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dashboard__hero[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0.85;\n  font-size: 0.8rem;\n}\n.dashboard__hero[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.15rem;\n  margin: 0.15rem 0;\n}\n.dashboard__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 576px) {\n  .dashboard__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 1100px) {\n  .dashboard__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (min-width: 576px) {\n  .dashboard__wide[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n.dashboard__card[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  min-width: 0;\n}\n.dashboard__hint[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  text-align: center;\n  color: var(--%NS%bs-secondary-color);\n}\n.dashboard__hint[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [CifSelect, ShareCard, SavingsCard, LoanCard, FdCard, LandTable, RouterLink], template: '<div class="dashboard">\n  <app-cif-select [cifs]="cifs()" [(selectedId)]="selectedId" />\n\n  @if (!selectedId()) {\n    <p class="dashboard__hint">\n      <i class="bi bi-arrow-up-circle"></i>\n      \u0AB5\u0ABF\u0A97\u0AA4\u0ACB \u0A9C\u0ACB\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 \u0A89\u0AAA\u0AB0\u0AA5\u0AC0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB\n    </p>\n  } @else if (dashboard() === undefined) {\n    <p class="dashboard__hint text-danger">\n      <i class="bi bi-exclamation-triangle-fill"></i>\n      \u0AA1\u0AC7\u0A9F\u0ABE \u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB6\u0A95\u0ACD\u0AAF\u0ACB \u0AA8\u0AA5\u0AC0. \u0AAB\u0AB0\u0AC0 \u0AAA\u0ACD\u0AB0\u0AAF\u0AA4\u0ACD\u0AA8 \u0A95\u0AB0\u0ACB.\n    </p>\n  } @else if (dashboard(); as d) {\n    @if (d.member; as m) {\n      <a class="dashboard__hero" routerLink="/member">\n        <div>\n          <small>\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6</small>\n          <strong>{{ m.name1 }}</strong>\n          <span>\u0AA8\u0A82. {{ m.sabhasad_no }}</span>\n        </div>\n        <i class="bi bi-chevron-right"></i>\n      </a>\n    }\n\n    <div class="dashboard__grid">\n      <a class="dashboard__card" routerLink="/products/share">\n        <app-share-card [data]="d.share" />\n      </a>\n      <a class="dashboard__card" routerLink="/products/savings">\n        <app-savings-card [data]="d.savings" />\n      </a>\n      <a class="dashboard__card" routerLink="/products/loan-due">\n        <app-loan-card [data]="d.loan" />\n      </a>\n      <a class="dashboard__card" routerLink="/products/fd">\n        <app-fd-card [data]="d.fd" />\n      </a>\n      <a class="dashboard__wide dashboard__card" routerLink="/products/land">\n        <app-land-table [data]="d.land" />\n      </a>\n    </div>\n  } @else {\n    <div class="dashboard__hint" role="status">\n      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n      \u0AB2\u0ACB\u0AA1 \u0AA5\u0A88 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7\u2026\n    </div>\n  }\n</div>\n', styles: ["/* src/app/features/dashboard/dashboard.scss */\n.dashboard {\n  display: grid;\n  gap: 1rem;\n}\n.dashboard__hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-radius: var(--app-radius);\n  background: var(--app-header-bg);\n  color: var(--app-header-fg);\n  text-decoration: none;\n  box-shadow: var(--app-shadow);\n}\n.dashboard__hero small,\n.dashboard__hero span {\n  display: block;\n  opacity: 0.85;\n  font-size: 0.8rem;\n}\n.dashboard__hero strong {\n  display: block;\n  font-size: 1.15rem;\n  margin: 0.15rem 0;\n}\n.dashboard__grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 576px) {\n  .dashboard__grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 1100px) {\n  .dashboard__grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (min-width: 576px) {\n  .dashboard__wide {\n    grid-column: 1/-1;\n  }\n}\n.dashboard__card {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  min-width: 0;\n}\n.dashboard__hint {\n  margin: 1.5rem 0;\n  text-align: center;\n  color: var(--bs-secondary-color);\n}\n.dashboard__hint .bi {\n  margin-right: 0.35rem;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/dashboard/dashboard.ts", lineNumber: 20 });
})();
export {
  Dashboard
};
//# debugId=a20abb23-a57f-5c98-91f9-9826f8465324
//# sourceMappingURL=chunk-FDOH5CP6.js.map

import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7S7ANFFG.js";

// src/app/shared/components/stat-card/stat-card.ts
var _c0 = ["*"];
function StatCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275domElement(1, "i", 6);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classMap("bi-" + ctx);
  }
}
function StatCard_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "strong", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badge());
  }
}
var StatCard = class _StatCard {
  title = input.required(
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Bootstrap Icons class suffix, e.g. "piggy-bank" */
  icon = input(
    ...ngDevMode ? [void 0, { debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Optional bold figure shown on the right of the title. */
  badge = input(
    ...ngDevMode ? [void 0, { debugName: "badge" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function StatCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatCard, selectors: [["app-stat-card"]], inputs: { title: [1, "title"], icon: [1, "icon"], badge: [1, "badge"] }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "stat-card"], [1, "stat-card__head"], [1, "stat-card__title"], [1, "stat-card__icon"], [1, "stat-card__badge"], [1, "stat-card__body"], [1, "bi"]], template: function StatCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h2", 2);
      \u0275\u0275conditionalCreate(3, StatCard_Conditional_3_Template, 2, 2, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, StatCard_Conditional_5_Template, 2, 1, "strong", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275projection(7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_0_0 = ctx.icon()) ? 3 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.badge() !== void 0 ? 5 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  border-radius: var(--%NS%app-radius);\n  box-shadow: var(--%NS%app-shadow);\n  padding: 1rem 1.1rem;\n}\n.stat-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.stat-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: var(--%NS%app-primary-soft);\n  color: var(--%NS%app-primary);\n}\n.stat-card__badge[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=stat-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatCard, [{
    type: Component,
    args: [{ selector: "app-stat-card", template: `<section class="stat-card">
  <header class="stat-card__head">
    <h2 class="stat-card__title">
      @if (icon(); as icon) {
        <span class="stat-card__icon"><i class="bi" [class]="'bi-' + icon"></i></span>
      }
      {{ title() }}
    </h2>
    @if (badge() !== undefined) {
      <strong class="stat-card__badge">{{ badge() }}</strong>
    }
  </header>
  <div class="stat-card__body">
    <ng-content />
  </div>
</section>
`, styles: ["/* src/app/shared/components/stat-card/stat-card.scss */\n:host {\n  display: block;\n}\n.stat-card {\n  height: 100%;\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  box-shadow: var(--app-shadow);\n  padding: 1rem 1.1rem;\n}\n.stat-card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.stat-card__title {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.stat-card__icon {\n  display: inline-grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n}\n.stat-card__badge {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=stat-card.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], badge: [{ type: Input, args: [{ isSignal: true, alias: "badge", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatCard, { className: "StatCard", filePath: "src/app/shared/components/stat-card/stat-card.ts", lineNumber: 9 });
})();

// src/app/shared/components/stat-row/stat-row.ts
var StatRow = class _StatRow {
  label = input.required(
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  value = input.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function StatRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatRow, selectors: [["app-stat-row"]], inputs: { label: [1, "label"], value: [1, "value"] }, decls: 5, vars: 2, consts: [[1, "stat-row"], [1, "stat-row__label"], [1, "stat-row__value"]], template: function StatRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.value());
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n  padding: 0.4rem 0;\n}\n[_nghost-%COMP%]:not(:first-child)   .stat-row[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--%NS%app-border);\n}\n.stat-row__label[_ngcontent-%COMP%] {\n  color: var(--%NS%bs-secondary-color);\n}\n.stat-row__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n/*# sourceMappingURL=stat-row.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatRow, [{
    type: Component,
    args: [{ selector: "app-stat-row", template: '<div class="stat-row">\n  <span class="stat-row__label">{{ label() }}</span>\n  <span class="stat-row__value">{{ value() }}</span>\n</div>\n', styles: ["/* src/app/shared/components/stat-row/stat-row.scss */\n:host {\n  display: block;\n}\n.stat-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n  padding: 0.4rem 0;\n}\n:host(:not(:first-child)) .stat-row {\n  border-top: 1px dashed var(--app-border);\n}\n.stat-row__label {\n  color: var(--bs-secondary-color);\n}\n.stat-row__value {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n/*# sourceMappingURL=stat-row.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatRow, { className: "StatRow", filePath: "src/app/shared/components/stat-row/stat-row.ts", lineNumber: 9 });
})();

export {
  StatCard,
  StatRow
};
//# debugId=284b6e8e-eaac-5198-ba0e-7a73bfae13db
//# sourceMappingURL=chunk-BOXNZLFD.js.map

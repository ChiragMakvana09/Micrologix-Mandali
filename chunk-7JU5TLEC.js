import {
  StatCard
} from "./chunk-BOXNZLFD.js";
import {
  Component,
  DestroyRef,
  Injector,
  Input,
  ReplaySubject,
  RuntimeError,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7S7ANFFG.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.2.4
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/features/dashboard/components/land-table/land-table.ts
var _forTrack0 = ($index, $item) => $item.serial;
function LandTable_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.serial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.village);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.surveyNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.eightANo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.hectareAare);
  }
}
function LandTable_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 6);
    \u0275\u0275text(2, "\u0A95\u0ACB\u0A88 \u0A9C\u0AAE\u0AC0\u0AA8 \u0AB0\u0AC7\u0A95\u0ACB\u0AB0\u0ACD\u0AA1 \u0AA8\u0AA5\u0AC0");
    \u0275\u0275elementEnd()();
  }
}
var LandTable = class _LandTable {
  data = input.required(
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function LandTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandTable)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandTable, selectors: [["app-land-table"]], inputs: { data: [1, "data"] }, decls: 19, vars: 2, consts: [["title", "\u0A95\u0AC1\u0AB2 \u0A9C\u0AAE\u0AC0\u0AA8", "icon", "geo-alt-fill", 3, "badge"], [1, "table-responsive"], [1, "table", "land-table", "align-middle", "mb-0"], ["scope", "col"], ["scope", "col", 1, "text-end"], [1, "text-end"], ["colspan", "5", 1, "text-center", "text-secondary", "py-3"]], template: function LandTable_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-card", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th", 3);
      \u0275\u0275text(6, "\u0A95\u0ACD\u0AB0\u0AAE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "th", 3);
      \u0275\u0275text(8, "\u0A97\u0ABE\u0AAE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "th", 3);
      \u0275\u0275text(10, "\u0AB8\u0AB0\u0ACD\u0AB5\u0AC7 \u0AA8\u0A82\u0AAC\u0AB0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 3);
      \u0275\u0275text(12, "\u0AEE-\u0A85 \u0AA8.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 4);
      \u0275\u0275text(14, "\u0AB9\u0AC7\u0A95\u0ACD\u0A9F\u0AB0 \u0A86\u0AB0\u0AC7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "tbody");
      \u0275\u0275repeaterCreate(16, LandTable_For_17_Template, 11, 5, "tr", null, _forTrack0, false, LandTable_ForEmpty_18_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("badge", ctx.data().totalLand);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.data().records);
    }
  }, dependencies: [StatCard], styles: ["\n.land-table[_ngcontent-%COMP%] {\n  --%NS%bs-table-bg: transparent;\n  font-variant-numeric: tabular-nums;\n}\n.land-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n  color: var(--%NS%bs-secondary-color);\n}\n/*# sourceMappingURL=land-table.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandTable, [{
    type: Component,
    args: [{ selector: "app-land-table", imports: [StatCard], template: '<app-stat-card title="\u0A95\u0AC1\u0AB2 \u0A9C\u0AAE\u0AC0\u0AA8" icon="geo-alt-fill" [badge]="data().totalLand">\n  <div class="table-responsive">\n    <table class="table land-table align-middle mb-0">\n      <thead>\n        <tr>\n          <th scope="col">\u0A95\u0ACD\u0AB0\u0AAE</th>\n          <th scope="col">\u0A97\u0ABE\u0AAE</th>\n          <th scope="col">\u0AB8\u0AB0\u0ACD\u0AB5\u0AC7 \u0AA8\u0A82\u0AAC\u0AB0</th>\n          <th scope="col">\u0AEE-\u0A85 \u0AA8.</th>\n          <th scope="col" class="text-end">\u0AB9\u0AC7\u0A95\u0ACD\u0A9F\u0AB0 \u0A86\u0AB0\u0AC7</th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (row of data().records; track row.serial) {\n          <tr>\n            <td>{{ row.serial }}</td>\n            <td>{{ row.village }}</td>\n            <td>{{ row.surveyNo }}</td>\n            <td>{{ row.eightANo }}</td>\n            <td class="text-end">{{ row.hectareAare }}</td>\n          </tr>\n        } @empty {\n          <tr>\n            <td colspan="5" class="text-center text-secondary py-3">\u0A95\u0ACB\u0A88 \u0A9C\u0AAE\u0AC0\u0AA8 \u0AB0\u0AC7\u0A95\u0ACB\u0AB0\u0ACD\u0AA1 \u0AA8\u0AA5\u0AC0</td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n</app-stat-card>\n', styles: ["/* src/app/features/dashboard/components/land-table/land-table.scss */\n.land-table {\n  --bs-table-bg: transparent;\n  font-variant-numeric: tabular-nums;\n}\n.land-table th {\n  font-weight: 600;\n  white-space: nowrap;\n  color: var(--bs-secondary-color);\n}\n/*# sourceMappingURL=land-table.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandTable, { className: "LandTable", filePath: "src/app/features/dashboard/components/land-table/land-table.ts", lineNumber: 11 });
})();

export {
  toObservable,
  toSignal,
  LandTable
};
//# debugId=ada580e2-613d-5bc5-8b87-609d1ee08820
//# sourceMappingURL=chunk-7JU5TLEC.js.map

import {
  fmtDate
} from "./chunk-ZI3SXC76.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-7S7ANFFG.js";

// src/app/shared/pipes/pacs-date.pipe.ts
var PacsDatePipe = class _PacsDatePipe {
  transform(value) {
    return fmtDate(value);
  }
  static \u0275fac = function PacsDatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PacsDatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "pacsDate", type: _PacsDatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PacsDatePipe, [{
    type: Pipe,
    args: [{ name: "pacsDate" }]
  }], null, null);
})();

export {
  PacsDatePipe
};
//# debugId=ab77bb2e-3313-5af2-b710-2113a201e58b
//# sourceMappingURL=chunk-UW3NL477.js.map

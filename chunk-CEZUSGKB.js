import {
  DOCUMENT,
  Injectable,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7S7ANFFG.js";

// src/app/core/services/theme.service.ts
var STORAGE_KEY = "app-theme";
var ThemeService = class _ThemeService {
  document = inject(DOCUMENT);
  theme = signal(
    this.initialTheme(),
    ...ngDevMode ? [{ debugName: "theme" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      const theme = this.theme();
      this.document.documentElement.setAttribute("data-bs-theme", theme);
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
      }
    });
  }
  toggle() {
    this.theme.update((t) => t === "dark" ? "light" : "dark");
  }
  initialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark")
        return saved;
    } catch {
    }
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# debugId=d4e72842-f14e-52b6-afdd-25f7eadd0999
//# sourceMappingURL=chunk-CEZUSGKB.js.map

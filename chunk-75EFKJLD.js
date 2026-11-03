import {
  ThemeService
} from "./chunk-CEZUSGKB.js";
import {
  Component,
  Router,
  SessionService,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7S7ANFFG.js";

// src/app/features/settings/settings.ts
function Settings_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2, "\u0AAE\u0ACB\u0AAC\u0ABE\u0A88\u0AB2");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 3)(6, "span");
    \u0275\u0275text(7, "\u0AB8\u0ACB\u0AB8\u0ABE\u0AAF\u0A9F\u0AC0 \u0A95\u0ACB\u0AA1");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 3)(11, "span");
    \u0275\u0275text(12, "\u0AAC\u0ABF\u0A9D\u0AA8\u0AC7\u0AB8 \u0AA8\u0A82\u0AAC\u0AB0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r1.businessCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r1.businessNumber);
  }
}
var Settings = class _Settings {
  session = inject(SessionService);
  theme = inject(ThemeService);
  router = inject(Router);
  logout() {
    this.session.logout();
    void this.router.navigateByUrl("/login");
  }
  static \u0275fac = function Settings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Settings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Settings, selectors: [["app-settings"]], decls: 17, vars: 3, consts: [[1, "settings"], [1, "section-title"], [1, "settings__card"], [1, "settings__row"], ["type", "button", 1, "settings__chip", 3, "click"], ["type", "button", 1, "settings__logout", 3, "click"]], template: function Settings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "\u0AB8\u0AC7\u0A9F\u0ABF\u0A82\u0A97\u0ACD\u0AB8");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "span");
      \u0275\u0275text(6, "\u0AA5\u0AC0\u0AAE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 4);
      \u0275\u0275domListener("click", function Settings_Template_button_click_7_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 3)(10, "span");
      \u0275\u0275text(11, "\u0AAE\u0ACB\u0AA1");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "strong");
      \u0275\u0275text(13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(14, Settings_Conditional_14_Template, 15, 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "button", 5);
      \u0275\u0275domListener("click", function Settings_Template_button_click_15_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(16, "\u0AB2\u0ACB\u0A97 \u0A86\u0A89\u0A9F");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.theme.theme() === "dark" ? "\u0AA1\u0ABE\u0AB0\u0ACD\u0A95" : "\u0AB2\u0ABE\u0A88\u0A9F", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.session.mode() === "live" ? "\u0AB2\u0ABE\u0A88\u0AB5 API" : "\u0AA1\u0AC7\u0AAE\u0ACB");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.session.credentials()) ? 14 : -1, tmp_2_0);
    }
  }, styles: ["\n.settings[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.settings__card[_ngcontent-%COMP%] {\n  background: var(--%NS%app-card-bg);\n  border: 1px solid var(--%NS%app-border);\n  border-radius: var(--%NS%app-radius);\n  padding: 0.4rem 1rem;\n  box-shadow: var(--%NS%app-shadow);\n}\n.settings__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.85rem 0;\n  border-bottom: 1px dashed var(--%NS%app-border);\n  color: var(--%NS%bs-secondary-color);\n}\n.settings__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.settings__row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%bs-body-color);\n  text-align: right;\n  word-break: break-all;\n}\n.settings__chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%app-border);\n  background: var(--%NS%app-primary-soft);\n  color: var(--%NS%app-primary);\n  border-radius: 999px;\n  padding: 0.2rem 0.8rem;\n  font-weight: 600;\n}\n.settings__logout[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  border: 0;\n  border-radius: 0.9rem;\n  background: #dc2626;\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=settings.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Settings, [{
    type: Component,
    args: [{ selector: "app-settings", template: `<section class="settings">
  <h1 class="section-title">\u0AB8\u0AC7\u0A9F\u0ABF\u0A82\u0A97\u0ACD\u0AB8</h1>

  <div class="settings__card">
    <div class="settings__row">
      <span>\u0AA5\u0AC0\u0AAE</span>
      <button type="button" class="settings__chip" (click)="theme.toggle()">
        {{ theme.theme() === 'dark' ? '\u0AA1\u0ABE\u0AB0\u0ACD\u0A95' : '\u0AB2\u0ABE\u0A88\u0A9F' }}
      </button>
    </div>
    <div class="settings__row">
      <span>\u0AAE\u0ACB\u0AA1</span>
      <strong>{{ session.mode() === 'live' ? '\u0AB2\u0ABE\u0A88\u0AB5 API' : '\u0AA1\u0AC7\u0AAE\u0ACB' }}</strong>
    </div>
    @if (session.credentials(); as c) {
      <div class="settings__row"><span>\u0AAE\u0ACB\u0AAC\u0ABE\u0A88\u0AB2</span><strong>{{ c.mobile }}</strong></div>
      <div class="settings__row"><span>\u0AB8\u0ACB\u0AB8\u0ABE\u0AAF\u0A9F\u0AC0 \u0A95\u0ACB\u0AA1</span><strong>{{ c.businessCode }}</strong></div>
      <div class="settings__row"><span>\u0AAC\u0ABF\u0A9D\u0AA8\u0AC7\u0AB8 \u0AA8\u0A82\u0AAC\u0AB0</span><strong>{{ c.businessNumber }}</strong></div>
    }
  </div>

  <button type="button" class="settings__logout" (click)="logout()">\u0AB2\u0ACB\u0A97 \u0A86\u0A89\u0A9F</button>
</section>
`, styles: ["/* src/app/features/settings/settings.scss */\n.settings {\n  display: grid;\n  gap: 1rem;\n}\n.settings__card {\n  background: var(--app-card-bg);\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 0.4rem 1rem;\n  box-shadow: var(--app-shadow);\n}\n.settings__row {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.85rem 0;\n  border-bottom: 1px dashed var(--app-border);\n  color: var(--bs-secondary-color);\n}\n.settings__row:last-child {\n  border-bottom: 0;\n}\n.settings__row strong {\n  color: var(--bs-body-color);\n  text-align: right;\n  word-break: break-all;\n}\n.settings__chip {\n  border: 1px solid var(--app-border);\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n  border-radius: 999px;\n  padding: 0.2rem 0.8rem;\n  font-weight: 600;\n}\n.settings__logout {\n  min-height: 2.75rem;\n  border: 0;\n  border-radius: 0.9rem;\n  background: #dc2626;\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=settings.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Settings, { className: "Settings", filePath: "src/app/features/settings/settings.ts", lineNumber: 11 });
})();
export {
  Settings
};
//# debugId=a8601e52-9136-5602-9be8-b8741418f8c4
//# sourceMappingURL=chunk-75EFKJLD.js.map

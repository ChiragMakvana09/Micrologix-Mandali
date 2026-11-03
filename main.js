import {
  ThemeService
} from "./chunk-CEZUSGKB.js";
import {
  Component,
  Input,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  SessionService,
  bootstrapApplication,
  inject,
  input,
  output,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7S7ANFFG.js";

// src/app/core/guards/session.guard.ts
var sessionGuard = () => {
  const session = inject(SessionService);
  const router = inject(Router);
  return session.isReady() ? true : router.createUrlTree(["/login"]);
};
var guestGuard = () => {
  const session = inject(SessionService);
  const router = inject(Router);
  return session.isReady() ? router.createUrlTree(["/dashboard"]) : true;
};

// src/app/layout/menu.config.ts
var MENU_ITEMS = [
  { label: "\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1", icon: "grid-1x2-fill", route: "/dashboard" },
  { label: "\u0AB5\u0ACD\u0AAF\u0AB5\u0AB9\u0ABE\u0AB0\u0ACB", icon: "arrow-left-right", route: "/transactions" },
  { label: "\u0A95\u0ABE\u0AB0\u0ACD\u0AA1\u0ACD\u0AB8", icon: "credit-card-2-front-fill", route: "/cards" },
  { label: "\u0AB8\u0AC7\u0A9F\u0ABF\u0A82\u0A97\u0ACD\u0AB8", icon: "gear-fill", route: "/settings" }
];

// src/app/layout/bottom-menu/bottom-menu.ts
var _forTrack0 = ($index, $item) => $item.route;
function BottomMenu_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi-" + item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var BottomMenu = class _BottomMenu {
  items = MENU_ITEMS;
  static \u0275fac = function BottomMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomMenu, selectors: [["app-bottom-menu"]], decls: 4, vars: 0, consts: [["aria-label", "\u0AAE\u0AC1\u0A96\u0ACD\u0AAF \u0AAE\u0AC7\u0AA8\u0AC1", 1, "bottom-menu"], [1, "app-container", "bottom-menu__inner"], ["routerLinkActive", "is-active", 1, "bottom-menu__item", 3, "routerLink"], [1, "bi"]], template: function BottomMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, BottomMenu_For_3_Template, 4, 4, "a", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n.bottom-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: auto 0 0 0;\n  z-index: 1020;\n  height: calc(var(--%NS%app-bottom-menu-height) + env(safe-area-inset-bottom));\n  padding-bottom: env(safe-area-inset-bottom);\n  background: var(--%NS%app-card-bg);\n  border-top: 1px solid var(--%NS%app-border);\n}\n.bottom-menu__inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n}\n.bottom-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.15rem;\n  font-size: 0.72rem;\n  color: var(--%NS%bs-secondary-color);\n  text-decoration: none;\n}\n.bottom-menu__item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.bottom-menu__item.is-active[_ngcontent-%COMP%] {\n  color: var(--%NS%app-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=bottom-menu.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomMenu, [{
    type: Component,
    args: [{ selector: "app-bottom-menu", imports: [RouterLink, RouterLinkActive], template: `<nav class="bottom-menu" aria-label="\u0AAE\u0AC1\u0A96\u0ACD\u0AAF \u0AAE\u0AC7\u0AA8\u0AC1">
  <div class="app-container bottom-menu__inner">
    @for (item of items; track item.route) {
      <a class="bottom-menu__item" [routerLink]="item.route" routerLinkActive="is-active">
        <i class="bi" [class]="'bi-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </a>
    }
  </div>
</nav>
`, styles: ["/* src/app/layout/bottom-menu/bottom-menu.scss */\n.bottom-menu {\n  position: fixed;\n  inset: auto 0 0 0;\n  z-index: 1020;\n  height: calc(var(--app-bottom-menu-height) + env(safe-area-inset-bottom));\n  padding-bottom: env(safe-area-inset-bottom);\n  background: var(--app-card-bg);\n  border-top: 1px solid var(--app-border);\n}\n.bottom-menu__inner {\n  height: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n}\n.bottom-menu__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.15rem;\n  font-size: 0.72rem;\n  color: var(--bs-secondary-color);\n  text-decoration: none;\n}\n.bottom-menu__item .bi {\n  font-size: 1.3rem;\n}\n.bottom-menu__item.is-active {\n  color: var(--app-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=bottom-menu.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomMenu, { className: "BottomMenu", filePath: "src/app/layout/bottom-menu/bottom-menu.ts", lineNumber: 11 });
})();

// src/app/layout/header/header.ts
function Header_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function Header_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuClick.emit());
    });
    \u0275\u0275domElement(1, "i", 11);
    \u0275\u0275domElementEnd();
  }
}
function Header_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 3);
  }
}
var Header = class _Header {
  themeService = inject(ThemeService);
  menuClick = output();
  showMenu = input(
    true,
    ...ngDevMode ? [{ debugName: "showMenu" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], inputs: { showMenu: [1, "showMenu"] }, outputs: { menuClick: "menuClick" }, decls: 11, vars: 4, consts: [[1, "app-header"], [1, "app-container", "app-header__inner"], ["type", "button", "aria-label", "\u0AAE\u0AC7\u0AA8\u0AC1", 1, "app-header__btn"], [1, "app-header__spacer"], [1, "app-header__brand"], [1, "app-header__actions"], ["type", "button", 1, "app-header__btn", 3, "click"], [1, "bi"], ["type", "button", "aria-label", "\u0AA8\u0ACB\u0A9F\u0ABF\u0AAB\u0ABF\u0A95\u0AC7\u0AB6\u0AA8", 1, "app-header__btn"], [1, "bi", "bi-bell-fill"], ["type", "button", "aria-label", "\u0AAE\u0AC7\u0AA8\u0AC1", 1, "app-header__btn", 3, "click"], [1, "bi", "bi-list"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, Header_Conditional_2_Template, 2, 0, "button", 2)(3, Header_Conditional_3_Template, 1, 0, "span", 3);
      \u0275\u0275domElementStart(4, "span", 4);
      \u0275\u0275text(5, "Micrologix ERP");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5)(7, "button", 6);
      \u0275\u0275domListener("click", function Header_Template_button_click_7_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275domElement(8, "i", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 8);
      \u0275\u0275domElement(10, "i", 9);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showMenu() ? 2 : 3);
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-label", ctx.themeService.theme() === "dark" ? "Light mode" : "Dark mode");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.themeService.theme() === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill");
    }
  }, styles: ["\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n  height: var(--%NS%app-header-height);\n  background: var(--%NS%app-header-bg);\n  color: var(--%NS%app-header-fg);\n}\n.app-header__inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.app-header__brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.app-header__spacer[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.app-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.app-header__btn[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: inherit;\n  font-size: 1.25rem;\n}\n.app-header__btn[_ngcontent-%COMP%]:hover, \n.app-header__btn[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(255, 255, 255, 0.16);\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", template: `<header class="app-header">
  <div class="app-container app-header__inner">
    @if (showMenu()) {
      <button type="button" class="app-header__btn" aria-label="\u0AAE\u0AC7\u0AA8\u0AC1" (click)="menuClick.emit()">
        <i class="bi bi-list"></i>
      </button>
    } @else {
      <span class="app-header__spacer"></span>
    }

    <span class="app-header__brand">Micrologix ERP</span>

    <div class="app-header__actions">
      <button
        type="button"
        class="app-header__btn"
        [attr.aria-label]="themeService.theme() === 'dark' ? 'Light mode' : 'Dark mode'"
        (click)="themeService.toggle()"
      >
        <i class="bi" [class]="themeService.theme() === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'"></i>
      </button>
      <button type="button" class="app-header__btn" aria-label="\u0AA8\u0ACB\u0A9F\u0ABF\u0AAB\u0ABF\u0A95\u0AC7\u0AB6\u0AA8">
        <i class="bi bi-bell-fill"></i>
      </button>
    </div>
  </div>
</header>
`, styles: ["/* src/app/layout/header/header.scss */\n.app-header {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n  height: var(--app-header-height);\n  background: var(--app-header-bg);\n  color: var(--app-header-fg);\n}\n.app-header__inner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.app-header__brand {\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.app-header__spacer {\n  width: 2.5rem;\n}\n.app-header__actions {\n  display: flex;\n  gap: 0.25rem;\n}\n.app-header__btn {\n  display: inline-grid;\n  place-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: inherit;\n  font-size: 1.25rem;\n}\n.app-header__btn:hover,\n.app-header__btn:focus-visible {\n  background: rgba(255, 255, 255, 0.16);\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], null, { menuClick: [{ type: Output, args: ["menuClick"] }], showMenu: [{ type: Input, args: [{ isSignal: true, alias: "showMenu", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/layout/header/header.ts", lineNumber: 9 });
})();

// src/app/layout/side-panel/side-panel.ts
var _forTrack02 = ($index, $item) => $item.route;
function SidePanel_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function SidePanel_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-open", ctx_r1.open());
  }
}
function SidePanel_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function SidePanel_For_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.persistent() ? null : ctx_r1.closed.emit());
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi-" + item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
var SIDE_ITEMS = [
  ...MENU_ITEMS.slice(0, 1),
  { label: "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AB5\u0ABF\u0A97\u0AA4", icon: "person-badge-fill", route: "/member" },
  ...MENU_ITEMS.slice(1)
];
var SidePanel = class _SidePanel {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  persistent = input(
    false,
    ...ngDevMode ? [{ debugName: "persistent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  closed = output();
  items = SIDE_ITEMS;
  static \u0275fac = function SidePanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidePanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidePanel, selectors: [["app-side-panel"]], inputs: { open: [1, "open"], persistent: [1, "persistent"] }, outputs: { closed: "closed" }, decls: 13, vars: 6, consts: [[1, "side-backdrop", 3, "is-open"], [1, "side-panel"], [1, "side-panel__profile"], [1, "side-panel__avatar"], [1, "bi", "bi-person-fill"], [1, "d-block", "opacity-75"], [1, "side-panel__nav"], ["routerLinkActive", "is-active", 1, "side-panel__link", 3, "routerLink"], [1, "side-backdrop", 3, "click"], ["routerLinkActive", "is-active", 1, "side-panel__link", 3, "click", "routerLink"], [1, "bi"]], template: function SidePanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SidePanel_Conditional_0_Template, 1, 2, "div", 0);
      \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "strong");
      \u0275\u0275text(7, "Micrologix ERP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "small", 5);
      \u0275\u0275text(9, "\u0AB8\u0AB9\u0A95\u0ABE\u0AB0\u0AC0 \u0AAE\u0A82\u0AA1\u0AB3\u0AC0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "nav", 6);
      \u0275\u0275repeaterCreate(11, SidePanel_For_12_Template, 3, 4, "a", 7, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.persistent() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("is-open", ctx.open())("is-persistent", ctx.persistent());
      \u0275\u0275attribute("aria-hidden", ctx.persistent() ? null : !ctx.open());
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.items);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n.side-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1030;\n  background: rgba(0, 0, 0, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s;\n}\n.side-backdrop.is-open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.side-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 auto 0 0;\n  z-index: 1040;\n  width: min(82vw, 300px);\n  display: flex;\n  flex-direction: column;\n  background: var(--%NS%app-card-bg);\n  transform: translateX(-100%);\n  transition: transform 0.25s ease;\n  visibility: hidden;\n}\n.side-panel.is-open[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n}\n.side-panel.is-persistent[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  width: var(--%NS%app-sidebar-width, 260px);\n  border-right: 1px solid var(--%NS%app-border);\n  box-shadow: none;\n  z-index: 1035;\n}\n.side-panel__profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem 1rem;\n  background: var(--%NS%app-header-bg);\n  color: var(--%NS%app-header-fg);\n}\n.side-panel__avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 1.4rem;\n}\n.side-panel__nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n}\n.side-panel__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  color: var(--%NS%bs-body-color);\n  text-decoration: none;\n}\n.side-panel__link.is-active[_ngcontent-%COMP%] {\n  background: var(--%NS%app-primary-soft);\n  color: var(--%NS%app-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=side-panel.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidePanel, [{
    type: Component,
    args: [{ selector: "app-side-panel", imports: [RouterLink, RouterLinkActive], template: `@if (!persistent()) {
  <div class="side-backdrop" [class.is-open]="open()" (click)="closed.emit()"></div>
}

<aside
  class="side-panel"
  [class.is-open]="open()"
  [class.is-persistent]="persistent()"
  [attr.aria-hidden]="persistent() ? null : !open()"
>
  <div class="side-panel__profile">
    <span class="side-panel__avatar"><i class="bi bi-person-fill"></i></span>
    <div>
      <strong>Micrologix ERP</strong>
      <small class="d-block opacity-75">\u0AB8\u0AB9\u0A95\u0ABE\u0AB0\u0AC0 \u0AAE\u0A82\u0AA1\u0AB3\u0AC0</small>
    </div>
  </div>

  <nav class="side-panel__nav">
    @for (item of items; track item.route) {
      <a
        class="side-panel__link"
        [routerLink]="item.route"
        routerLinkActive="is-active"
        (click)="persistent() ? null : closed.emit()"
      >
        <i class="bi" [class]="'bi-' + item.icon"></i>
        {{ item.label }}
      </a>
    }
  </nav>
</aside>
`, styles: ["/* src/app/layout/side-panel/side-panel.scss */\n.side-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1030;\n  background: rgba(0, 0, 0, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s;\n}\n.side-backdrop.is-open {\n  opacity: 1;\n  pointer-events: auto;\n}\n.side-panel {\n  position: fixed;\n  inset: 0 auto 0 0;\n  z-index: 1040;\n  width: min(82vw, 300px);\n  display: flex;\n  flex-direction: column;\n  background: var(--app-card-bg);\n  transform: translateX(-100%);\n  transition: transform 0.25s ease;\n  visibility: hidden;\n}\n.side-panel.is-open {\n  transform: none;\n  visibility: visible;\n}\n.side-panel.is-persistent {\n  transform: none;\n  visibility: visible;\n  width: var(--app-sidebar-width, 260px);\n  border-right: 1px solid var(--app-border);\n  box-shadow: none;\n  z-index: 1035;\n}\n.side-panel__profile {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.25rem 1rem;\n  background: var(--app-header-bg);\n  color: var(--app-header-fg);\n}\n.side-panel__avatar {\n  display: grid;\n  place-items: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 1.4rem;\n}\n.side-panel__nav {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n}\n.side-panel__link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  color: var(--bs-body-color);\n  text-decoration: none;\n}\n.side-panel__link.is-active {\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=side-panel.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], persistent: [{ type: Input, args: [{ isSignal: true, alias: "persistent", required: false }] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidePanel, { className: "SidePanel", filePath: "src/app/layout/side-panel/side-panel.ts", lineNumber: 17 });
})();

// src/app/layout/main-layout/main-layout.ts
function MainLayout_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-bottom-menu");
  }
}
var MainLayout = class _MainLayout {
  panelOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "panelOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDesktop = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDesktop" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (typeof matchMedia === "function") {
      const mq = matchMedia("(min-width: 992px)");
      this.isDesktop.set(mq.matches);
      mq.addEventListener("change", (e) => this.isDesktop.set(e.matches));
    }
  }
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 6, vars: 6, consts: [[1, "shell"], [3, "menuClick", "showMenu"], [3, "closed", "open", "persistent"], [1, "app-container", "app-main"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-header", 1);
      \u0275\u0275listener("menuClick", function MainLayout_Template_app_header_menuClick_1_listener() {
        return ctx.panelOpen.set(true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-side-panel", 2);
      \u0275\u0275listener("closed", function MainLayout_Template_app_side_panel_closed_2_listener() {
        return ctx.panelOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3);
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, MainLayout_Conditional_5_Template, 1, 0, "app-bottom-menu");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("shell--desktop", ctx.isDesktop());
      \u0275\u0275advance();
      \u0275\u0275property("showMenu", !ctx.isDesktop());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.panelOpen() || ctx.isDesktop())("persistent", ctx.isDesktop());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isDesktop() ? 5 : -1);
    }
  }, dependencies: [RouterOutlet, Header, BottomMenu, SidePanel], styles: ["\n.shell--desktop[_ngcontent-%COMP%] {\n  --%NS%app-sidebar-width: 260px;\n}\n.app-main[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: calc(var(--%NS%app-bottom-menu-height) + 1.5rem + env(safe-area-inset-bottom));\n}\n.shell--desktop[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n  padding-bottom: 1.75rem;\n  margin-left: var(--%NS%app-sidebar-width);\n}\n.shell--desktop[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: var(--%NS%app-sidebar-width);\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", imports: [RouterOutlet, Header, BottomMenu, SidePanel], template: '<div class="shell" [class.shell--desktop]="isDesktop()">\n  <app-header [showMenu]="!isDesktop()" (menuClick)="panelOpen.set(true)" />\n  <app-side-panel\n    [open]="panelOpen() || isDesktop()"\n    [persistent]="isDesktop()"\n    (closed)="panelOpen.set(false)"\n  />\n\n  <main class="app-container app-main">\n    <router-outlet />\n  </main>\n\n  @if (!isDesktop()) {\n    <app-bottom-menu />\n  }\n</div>\n', styles: ["/* src/app/layout/main-layout/main-layout.scss */\n.shell--desktop {\n  --app-sidebar-width: 260px;\n}\n.app-main {\n  padding-top: 1rem;\n  padding-bottom: calc(var(--app-bottom-menu-height) + 1.5rem + env(safe-area-inset-bottom));\n}\n.shell--desktop .app-main {\n  padding-bottom: 1.75rem;\n  margin-left: var(--app-sidebar-width);\n}\n.shell--desktop app-header {\n  display: block;\n  margin-left: var(--app-sidebar-width);\n}\n@media (min-width: 992px) {\n  :host {\n    display: block;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/layout/main-layout/main-layout.ts", lineNumber: 14 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    title: "\u0AB2\u0ACB\u0A97\u0ABF\u0AA8",
    canActivate: [guestGuard],
    loadComponent: () => import("./chunk-FKVH52I5.js").then((m) => m.Login)
  },
  {
    path: "",
    component: MainLayout,
    canActivate: [sessionGuard],
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      {
        path: "dashboard",
        title: "\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1",
        loadComponent: () => import("./chunk-FDOH5CP6.js").then((m) => m.Dashboard)
      },
      {
        path: "member",
        title: "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AB5\u0ABF\u0A97\u0AA4",
        loadComponent: () => import("./chunk-GG72MDBI.js").then((m) => m.Member)
      },
      {
        path: "products/:key",
        title: "\u0AAA\u0ACD\u0AB0\u0ACB\u0AA1\u0A95\u0ACD\u0A9F",
        loadComponent: () => import("./chunk-NX7UWYF6.js").then((m) => m.ProductPage)
      },
      {
        path: "transactions",
        title: "\u0AB5\u0ACD\u0AAF\u0AB5\u0AB9\u0ABE\u0AB0\u0ACB",
        loadComponent: () => import("./chunk-U7RFB7MH.js").then((m) => m.Transactions)
      },
      {
        path: "transactions/:product",
        title: "\u0AB5\u0ACD\u0AAF\u0AB5\u0AB9\u0ABE\u0AB0\u0ACB",
        loadComponent: () => import("./chunk-U7RFB7MH.js").then((m) => m.Transactions)
      },
      {
        path: "transactions/:product/:acc",
        title: "\u0AAE\u0ABF\u0AA8\u0AC0 \u0AB8\u0ACD\u0A9F\u0AC7\u0A9F\u0AAE\u0AC7\u0AA8\u0ACD\u0A9F",
        loadComponent: () => import("./chunk-U7RFB7MH.js").then((m) => m.Transactions)
      },
      {
        path: "cards",
        title: "\u0A95\u0ABE\u0AB0\u0ACD\u0AA1\u0ACD\u0AB8",
        loadComponent: () => import("./chunk-LVPS2JAF.js").then((m) => m.Cards)
      },
      {
        path: "settings",
        title: "\u0AB8\u0AC7\u0A9F\u0ABF\u0A82\u0A97\u0ACD\u0AB8",
        loadComponent: () => import("./chunk-75EFKJLD.js").then((m) => m.Settings)
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.ts
var App = class _App {
  // Injected eagerly so the saved/auto-detected theme is applied on startup.
  constructor(_theme) {
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], () => [{ type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=106c6abf-f2bc-5599-ab24-0d273e05f7cb
//# sourceMappingURL=main.js.map

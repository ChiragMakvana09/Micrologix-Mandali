import {
  StatCard,
  StatRow
} from "./chunk-BOXNZLFD.js";
import {
  CifService,
  InrNumberPipe,
  num
} from "./chunk-ZI3SXC76.js";
import "./chunk-73B52QV6.js";
import {
  Component,
  RouterLink,
  computed,
  inject,
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-7S7ANFFG.js";

// src/app/features/member/member.ts
function Member_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-row", 8);
    \u0275\u0275pipe(1, "inrNumber");
  }
  if (rf & 2) {
    const m_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(1, 1, m_r1.divi_amount));
  }
}
function Member_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-stat-card", 0);
    \u0275\u0275element(1, "app-stat-row", 2)(2, "app-stat-row", 3)(3, "app-stat-row", 4);
    \u0275\u0275pipe(4, "inrNumber");
    \u0275\u0275element(5, "app-stat-row", 5);
    \u0275\u0275pipe(6, "inrNumber");
    \u0275\u0275element(7, "app-stat-row", 6);
    \u0275\u0275pipe(8, "inrNumber");
    \u0275\u0275element(9, "app-stat-row", 7);
    \u0275\u0275pipe(10, "inrNumber");
    \u0275\u0275conditionalCreate(11, Member_Conditional_0_Conditional_11_Template, 2, 3, "app-stat-row", 8);
    \u0275\u0275element(12, "app-stat-row", 9)(13, "app-stat-row", 10)(14, "app-stat-row", 11)(15, "app-stat-row", 12)(16, "app-stat-row", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", m_r1.name1 || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", m_r1.sabhasad_no);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(4, 12, m_r1.share_amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(6, 14, m_r1.savings_amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(8, 16, m_r1.fd_amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(10, 18, m_r1.dhiran_amount));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(m_r1.divi_amount ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", (m_r1.varsdar_name1 || "-") + (m_r1.varsdar_relation ? " (" + m_r1.varsdar_relation + ")" : ""));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.land());
    \u0275\u0275advance();
    \u0275\u0275property("value", m_r1.kcc_no || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", m_r1.bank_acc || "-");
    \u0275\u0275advance();
    \u0275\u0275property("value", m_r1.ifsc || "-");
  }
}
function Member_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, " \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB. ");
    \u0275\u0275elementStart(2, "a", 14);
    \u0275\u0275text(3, "\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1");
    \u0275\u0275elementEnd()();
  }
}
var Member = class _Member {
  cifService = inject(CifService);
  dashboard = this.cifService.lastDashboard;
  member = computed(
    () => this.dashboard()?.member ?? null,
    ...ngDevMode ? [{ debugName: "member" }] : (
      /* istanbul ignore next */
      []
    )
  );
  land = computed(
    () => num(this.member()?.hector_are).toFixed(4),
    ...ngDevMode ? [{ debugName: "land" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }
  static \u0275fac = function Member_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Member)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Member, selectors: [["app-member"]], decls: 2, vars: 1, consts: [["title", "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AB5\u0ABF\u0A97\u0AA4", "icon", "person-badge-fill"], [1, "text-center", "text-secondary", "py-5"], ["label", "\u0AA8\u0ABE\u0AAE", 3, "value"], ["label", "\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AA8\u0A82.", 3, "value"], ["label", "\u0AB6\u0AC7\u0AB0", 3, "value"], ["label", "\u0AB8\u0AC7\u0AB5\u0ABF\u0A82\u0A97\u0ACD\u0AB8", 3, "value"], ["label", "FD", 3, "value"], ["label", "\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3 \u0AAC\u0ABE\u0A95\u0AC0", 3, "value"], ["label", "\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1", 3, "value"], ["label", "\u0AB5\u0ABE\u0AB0\u0AB8\u0AA6\u0ABE\u0AB0", 3, "value"], ["label", "\u0A9C\u0AAE\u0AC0\u0AA8", 3, "value"], ["label", "KCC \u0AA8\u0A82.", 3, "value"], ["label", "\u0AAC\u0A9A\u0AA4 \u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82.", 3, "value"], ["label", "IFSC", 3, "value"], ["routerLink", "/dashboard"]], template: function Member_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Member_Conditional_0_Template, 17, 20, "app-stat-card", 0)(1, Member_Conditional_1_Template, 4, 0, "p", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.member()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [RouterLink, StatCard, StatRow, InrNumberPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Member, [{
    type: Component,
    args: [{ selector: "app-member", imports: [RouterLink, StatCard, StatRow, InrNumberPipe], template: `@if (member(); as m) {
  <app-stat-card title="\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AB5\u0ABF\u0A97\u0AA4" icon="person-badge-fill">
    <app-stat-row label="\u0AA8\u0ABE\u0AAE" [value]="m.name1 || '-'" />
    <app-stat-row label="\u0AB8\u0AAD\u0ABE\u0AB8\u0AA6 \u0AA8\u0A82." [value]="m.sabhasad_no" />
    <app-stat-row label="\u0AB6\u0AC7\u0AB0" [value]="m.share_amount | inrNumber" />
    <app-stat-row label="\u0AB8\u0AC7\u0AB5\u0ABF\u0A82\u0A97\u0ACD\u0AB8" [value]="m.savings_amount | inrNumber" />
    <app-stat-row label="FD" [value]="m.fd_amount | inrNumber" />
    <app-stat-row label="\u0AA7\u0ABF\u0AB0\u0ABE\u0AA3 \u0AAC\u0ABE\u0A95\u0AC0" [value]="m.dhiran_amount | inrNumber" />
    @if (m.divi_amount) {
      <app-stat-row label="\u0AA1\u0ABF\u0AB5\u0ABF\u0AA1\u0A82\u0AA1" [value]="m.divi_amount | inrNumber" />
    }
    <app-stat-row label="\u0AB5\u0ABE\u0AB0\u0AB8\u0AA6\u0ABE\u0AB0" [value]="(m.varsdar_name1 || '-') + (m.varsdar_relation ? ' (' + m.varsdar_relation + ')' : '')" />
    <app-stat-row label="\u0A9C\u0AAE\u0AC0\u0AA8" [value]="land()" />
    <app-stat-row label="KCC \u0AA8\u0A82." [value]="m.kcc_no || '-'" />
    <app-stat-row label="\u0AAC\u0A9A\u0AA4 \u0A96\u0ABE\u0AA4\u0ABE \u0AA8\u0A82." [value]="m.bank_acc || '-'" />
    <app-stat-row label="IFSC" [value]="m.ifsc || '-'" />
  </app-stat-card>
} @else {
  <p class="text-center text-secondary py-5">
    \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE \u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1 \u0AAA\u0AB0 CIF \u0AAA\u0AB8\u0A82\u0AA6 \u0A95\u0AB0\u0ACB.
    <a routerLink="/dashboard">\u0AA1\u0AC7\u0AB6\u0AAC\u0ACB\u0AB0\u0ACD\u0AA1</a>
  </p>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Member, { className: "Member", filePath: "src/app/features/member/member.ts", lineNumber: 14 });
})();
export {
  Member
};
//# debugId=e98450ae-a367-5c78-8371-86911a616fe4
//# sourceMappingURL=chunk-GG72MDBI.js.map

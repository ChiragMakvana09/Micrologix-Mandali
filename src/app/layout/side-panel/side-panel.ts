import { Component, computed, inject, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CifService } from '../../core/services/cif.service';
import { SessionService } from '../../core/services/session.service';
import { MENU_ITEMS, MenuItem } from '../menu.config';

const SIDE_ITEMS: MenuItem[] = [
  ...MENU_ITEMS.slice(0, 1),
  { label: 'સભાસદ વિગત', icon: 'person-badge-fill', route: '/member' },
  { label: 'સૂચનાઓ', icon: 'bell-fill', route: '/notifications' },
  ...MENU_ITEMS.slice(1),
];

@Component({
  selector: 'app-side-panel',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.scss',
})
export class SidePanel {
  private readonly session = inject(SessionService);
  private readonly cif = inject(CifService);

  readonly open = input(false);
  readonly persistent = input(false);
  readonly closed = output<void>();
  protected readonly items = SIDE_ITEMS;
  protected readonly memberName = computed(
    () => this.cif.lastDashboard()?.member?.name1 || 'Micrologix ERP',
  );
  protected readonly memberMeta = computed(() => {
    const member = this.cif.lastDashboard()?.member;
    if (member?.sabhasad_no) return `નં. ${member.sabhasad_no}`;
    return this.session.mode() === 'live' ? 'WhatsApp લિંક' : 'ફ્રી ડેમો';
  });
}

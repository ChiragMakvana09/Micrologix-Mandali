import { Injectable, computed, signal } from '@angular/core';
import { CifDashboard } from '../../models';
import { fmtInr } from '../utils/format';

export interface AppNotice {
  id: string;
  title: string;
  body: string;
  read: boolean;
}

@Injectable({ providedIn: 'root' })
export class NoticeService {
  readonly items = signal<AppNotice[]>([
    {
      id: 'welcome',
      title: 'સ્વાગત છે',
      body: 'ડેશબોર્ડ પર CIF પસંદ કરો અને ખાતા, વ્યવહારો તથા કાર્ડ્સ જુઓ.',
      read: false,
    },
  ]);

  readonly unread = computed(() => this.items().filter((n) => !n.read).length);

  sync(dashboard: CifDashboard | null): void {
    const next: AppNotice[] = [];
    const name = dashboard?.member?.name1 || 'સભાસદ';

    if (!dashboard) {
      next.push({
        id: 'welcome',
        title: 'સ્વાગત છે',
        body: 'ડેશબોર્ડ પર CIF પસંદ કરો અને ખાતા, વ્યવહારો તથા કાર્ડ્સ જુઓ.',
        read: false,
      });
      this.items.set(next);
      return;
    }

    if (dashboard.loan.duePrincipal > 0 || dashboard.loan.dueInterest > 0) {
      next.push({
        id: `loan-${dashboard.cifId}`,
        title: 'ભરવાપાત્ર ધિરાણ',
        body: `${name} — મુદલ ₹${fmtInr(dashboard.loan.duePrincipal)} અને વ્યાજ બાકી છે.`,
        read: false,
      });
    }

    if (dashboard.fd.maturingReceipts > 0) {
      next.push({
        id: `fd-${dashboard.cifId}`,
        title: 'પાકતી એફ.ડી.',
        body: `${name} — ${dashboard.fd.maturingReceipts} રસીદ 90 દિવસમાં પાકે છે.`,
        read: false,
      });
    }

    next.push({
      id: `ok-${dashboard.cifId}`,
      title: 'ખાતું તૈયાર',
      body: `${name} ની વિગતો લોડ થઈ ગઈ છે.`,
      read: false,
    });

    this.items.set(next);
  }

  markAllRead(): void {
    this.items.update((list) => list.map((n) => ({ ...n, read: true })));
  }
}

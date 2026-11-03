import { Injectable, computed, signal } from '@angular/core';

export type SessionMode = 'live' | 'demo';

export interface PacsCredentials {
  mobile: string;
  businessCode: string;
  businessNumber: string;
}

const STORAGE_KEY = 'pacs-session';

interface StoredSession {
  mode: SessionMode | null;
  credentials: PacsCredentials | null;
  selectedSabhasadNo: string;
}

function readStored(): StoredSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredSession) : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly stored = readStored();

  readonly mode = signal<SessionMode | null>(this.stored?.mode ?? null);
  readonly credentials = signal<PacsCredentials | null>(this.stored?.credentials ?? null);
  readonly selectedSabhasadNo = signal(this.stored?.selectedSabhasadNo ?? '');

  readonly isLive = computed(() => this.mode() === 'live' && !!this.credentials());
  readonly isReady = computed(() => this.mode() === 'demo' || this.isLive());

  startLive(credentials: PacsCredentials): void {
    const next: PacsCredentials = {
      mobile: credentials.mobile.trim(),
      businessCode: credentials.businessCode.trim(),
      businessNumber: credentials.businessNumber.trim(),
    };
    const prev = this.credentials();
    const sameSociety =
      prev?.mobile === next.mobile &&
      prev?.businessCode === next.businessCode &&
      prev?.businessNumber === next.businessNumber;

    this.mode.set('live');
    this.credentials.set(next);
    if (!sameSociety) this.selectedSabhasadNo.set('');
    this.persist();
  }

  startDemo(): void {
    this.mode.set('demo');
    this.credentials.set(null);
    this.selectedSabhasadNo.set('');
    this.persist();
  }

  selectSabhasad(no: string): void {
    this.selectedSabhasadNo.set(no);
    this.persist();
  }

  logout(): void {
    this.mode.set(null);
    this.credentials.set(null);
    this.selectedSabhasadNo.set('');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  private persist(): void {
    const payload: StoredSession = {
      mode: this.mode(),
      credentials: this.credentials(),
      selectedSabhasadNo: this.selectedSabhasadNo(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
  }
}

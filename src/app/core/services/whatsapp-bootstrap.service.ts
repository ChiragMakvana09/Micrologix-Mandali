import { Injectable, inject } from '@angular/core';
import { SessionService } from './session.service';
import { credentialsFromSearch, isDemoSearch } from '../utils/whatsapp-link';

/** Reads WhatsApp query params as soon as the app boots, before the first route. */
@Injectable({ providedIn: 'root' })
export class WhatsappBootstrapService {
  constructor() {
    const session = inject(SessionService);
    const search = globalThis.location?.search ?? '';
    if (isDemoSearch(search)) {
      session.startDemo();
      return;
    }
    const creds = credentialsFromSearch(search);
    if (creds) session.startLive(creds);
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, ParamMap, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { credentialsFromParams, isDemoLink } from '../utils/whatsapp-link';

function applyWhatsappQuery(session: SessionService, query: ParamMap): void {
  if (isDemoLink(query)) {
    session.startDemo();
    return;
  }
  const creds = credentialsFromParams(query);
  if (creds) session.startLive(creds);
}

export const sessionGuard: CanActivateFn = (route) => {
  const session = inject(SessionService);
  const router = inject(Router);
  applyWhatsappQuery(session, route.queryParamMap);
  return session.isReady() ? true : router.createUrlTree(['/open']);
};

export const guestGuard: CanActivateFn = (route) => {
  const session = inject(SessionService);
  const router = inject(Router);
  applyWhatsappQuery(session, route.queryParamMap);
  return session.isReady() ? router.createUrlTree(['/dashboard']) : true;
};

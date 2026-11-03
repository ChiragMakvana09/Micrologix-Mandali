import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Cif, CifDashboard } from '../../models';
import { MOCK_CIFS, MOCK_DASHBOARDS } from './cif-mock.data';

/**
 * Data access for the CIF dashboard.
 * Currently serves mock data; swap the bodies for HttpClient calls later
 * without touching any component.
 */
@Injectable({ providedIn: 'root' })
export class CifService {
  getCifList(): Observable<Cif[]> {
    return of(MOCK_CIFS).pipe(delay(300));
  }

  getDashboard(cifId: string): Observable<CifDashboard> {
    const data = MOCK_DASHBOARDS[cifId];
    return data
      ? of(data).pipe(delay(400))
      : throwError(() => new Error(`CIF ${cifId} not found`));
  }
}

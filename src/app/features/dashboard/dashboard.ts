import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, combineLatest, of, startWith, switchMap } from 'rxjs';
import { CifService } from '../../core/services/cif.service';
import { SessionService } from '../../core/services/session.service';
import { CifSelect } from './components/cif-select/cif-select';
import { FdCard } from './components/fd-card/fd-card';
import { LandTable } from './components/land-table/land-table';
import { LoanCard } from './components/loan-card/loan-card';
import { SavingsCard } from './components/savings-card/savings-card';
import { ShareCard } from './components/share-card/share-card';

@Component({
  selector: 'app-dashboard',
  imports: [CifSelect, ShareCard, SavingsCard, LoanCard, FdCard, LandTable, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly cifService = inject(CifService);
  private readonly session = inject(SessionService);

  protected readonly cifs = toSignal(
    this.cifService.getCifList().pipe(catchError(() => of([]))),
    { initialValue: [] },
  );
  protected readonly selectedId = signal(this.session.selectedSabhasadNo());
  protected readonly reload = signal(0);

  constructor() {
    effect(() => {
      const list = this.cifs();
      if (!this.selectedId() && list.length === 1) {
        this.selectedId.set(list[0].id);
      }
    });
  }

  /**
   * undefined -> failed to load, null -> loading or nothing selected,
   * object -> loaded dashboard.
   */
  protected readonly dashboard = toSignal(
    combineLatest([toObservable(this.selectedId), toObservable(this.reload)]).pipe(
      switchMap(([id]) =>
        id
          ? this.cifService.getDashboard(id).pipe(
              startWith(null),
              catchError(() => of(undefined)),
            )
          : of(null),
      ),
    ),
    { initialValue: null },
  );

  protected retry(): void {
    this.reload.update((n) => n + 1);
  }
}

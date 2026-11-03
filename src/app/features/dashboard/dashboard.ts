import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, startWith, switchMap } from 'rxjs';
import { CifService } from '../../core/services/cif.service';
import { CifSelect } from './components/cif-select/cif-select';
import { FdCard } from './components/fd-card/fd-card';
import { LandTable } from './components/land-table/land-table';
import { LoanCard } from './components/loan-card/loan-card';
import { SavingsCard } from './components/savings-card/savings-card';
import { ShareCard } from './components/share-card/share-card';

@Component({
  selector: 'app-dashboard',
  imports: [CifSelect, ShareCard, SavingsCard, LoanCard, FdCard, LandTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly cifService = inject(CifService);

  protected readonly cifs = toSignal(this.cifService.getCifList(), { initialValue: [] });
  protected readonly selectedId = signal('');

  /**
   * undefined -> failed to load, null -> loading or nothing selected,
   * object -> loaded dashboard.
   */
  protected readonly dashboard = toSignal(
    toObservable(this.selectedId).pipe(
      switchMap((id) =>
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
}

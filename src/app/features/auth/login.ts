import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { APP_CONFIG } from '../../core/config/app-config';
import { BankingApiService } from '../../core/services/banking-api.service';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-open-link',
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly session = inject(SessionService);
  private readonly api = inject(BankingApiService);
  private readonly router = inject(Router);

  protected readonly hint = signal(
    'WhatsApp પર મળેલી લિંકથી એપ ખોલો. લિંકમાં બિઝનેસ નંબર, શોર્ટ નેમ અને મોબાઈલ નંબર હોવા જોઈએ.',
  );
  protected readonly error = signal('');
  protected readonly loading = signal(false);

  protected live(): void {
    this.error.set('');
    this.loading.set(true);
    this.session.startLive(APP_CONFIG.liveTest);

    this.api
      .listSabhasads()
      .pipe(
        catchError((err: Error) => {
          this.session.logout();
          this.error.set(err.message || 'લાઈવ ડેટા લોડ થયો નથી.');
          this.loading.set(false);
          return of(null);
        }),
      )
      .subscribe((list) => {
        if (list == null) return;
        this.loading.set(false);
        void this.router.navigateByUrl('/dashboard');
      });
  }

  protected demo(): void {
    this.session.startDemo();
    void this.router.navigateByUrl('/dashboard');
  }
}

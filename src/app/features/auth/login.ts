import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

import { APP_CONFIG } from '../../core/config/app-config';
import { BankingApiService } from '../../core/services/banking-api.service';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-open-link',
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  private readonly session = inject(SessionService);
  private readonly api = inject(BankingApiService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly hint = signal(
    'WhatsApp પર મળેલી લિંકથી એપ ખોલો.',
  );

  protected readonly error = signal('');
  protected readonly loading = signal(false);

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;

    const businessNumber = params.get('business_number');
    const businessCode = params.get('business_code');
    const sabhasadMobile = params.get('sabhasad_mobile');

    if (businessNumber && businessCode && sabhasadMobile) {
      this.live({
        businessNumber,
        businessCode,
        mobile: sabhasadMobile,
      });
    } else {
      this.hint.set(
        'WhatsApp પર મળેલી લિંકથી એપ ખોલો. લિંકમાં બિઝનેસ નંબર, શોર્ટ નેમ અને મોબાઈલ નંબર હોવા જોઈએ.',
      );
    }
  }

  protected live(credentials?: any): void {
    this.error.set('');
    this.loading.set(true);

    const liveConfig = {
      ...APP_CONFIG.liveTest,
      ...(credentials || {}),
    };

    this.session.startLive(liveConfig);

    this.api
      .listSabhasads()
      .pipe(
        catchError((err: Error) => {
          this.session.logout();

          this.error.set(
            err.message || 'લાઈવ ડેટા લોડ થયો નથી.',
          );

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
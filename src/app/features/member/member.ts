import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CifService } from '../../core/services/cif.service';
import { num } from '../../core/utils/format';
import { InrNumberPipe } from '../../shared/pipes/inr-number.pipe';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { StatRow } from '../../shared/components/stat-row/stat-row';

@Component({
  selector: 'app-member',
  imports: [RouterLink, StatCard, StatRow, InrNumberPipe],
  templateUrl: './member.html',
})
export class Member {
  private readonly cifService = inject(CifService);
  protected readonly dashboard = this.cifService.lastDashboard;
  protected readonly member = computed(() => this.dashboard()?.member ?? null);
  protected readonly land = computed(() => num(this.member()?.hector_are).toFixed(4));

  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }
}

import { Component, input } from '@angular/core';
import { SavingsSummary } from '../../../../models';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { StatRow } from '../../../../shared/components/stat-row/stat-row';
import { InrNumberPipe } from '../../../../shared/pipes/inr-number.pipe';

@Component({
  selector: 'app-savings-card',
  imports: [StatCard, StatRow, InrNumberPipe],
  template: `
    <app-stat-card title="સેવિંગ્સ" icon="piggy-bank-fill">
      <app-stat-row label="કુલ ખાતા" [value]="data().totalAccounts" />
      <app-stat-row label="કુલ બેલેન્સ" [value]="data().totalBalance | inrNumber" />
    </app-stat-card>
  `,
})
export class SavingsCard {
  readonly data = input.required<SavingsSummary>();
}

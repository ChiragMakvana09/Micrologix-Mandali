import { Component, input } from '@angular/core';
import { FdSummary } from '../../../../models';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { StatRow } from '../../../../shared/components/stat-row/stat-row';
import { InrNumberPipe } from '../../../../shared/pipes/inr-number.pipe';

@Component({
  selector: 'app-fd-card',
  imports: [StatCard, StatRow, InrNumberPipe],
  template: `
    <app-stat-card title="એફ.ડી." icon="safe2-fill">
      <app-stat-row label="કુલ રસીદ" [value]="data().totalReceipts" />
      <app-stat-row label="કુલ બેલેન્સ" [value]="data().totalBalance | inrNumber" />
      <app-stat-row label="પાકતી રસીદ" [value]="data().maturingReceipts" />
    </app-stat-card>
  `,
})
export class FdCard {
  readonly data = input.required<FdSummary>();
}

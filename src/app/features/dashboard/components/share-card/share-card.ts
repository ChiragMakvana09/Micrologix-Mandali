import { Component, input } from '@angular/core';
import { ShareSummary } from '../../../../models';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { StatRow } from '../../../../shared/components/stat-row/stat-row';
import { InrNumberPipe } from '../../../../shared/pipes/inr-number.pipe';

@Component({
  selector: 'app-share-card',
  imports: [StatCard, StatRow, InrNumberPipe],
  template: `
    <app-stat-card title="શેર" icon="pie-chart-fill">
      <app-stat-row label="બેલેન્સ" [value]="data().balance | inrNumber" />
      @if (data().dividend > 0) {
        <app-stat-row label="ડિવિડંડ" [value]="data().dividend | inrNumber" />
      }
    </app-stat-card>
  `,
})
export class ShareCard {
  readonly data = input.required<ShareSummary>();
}

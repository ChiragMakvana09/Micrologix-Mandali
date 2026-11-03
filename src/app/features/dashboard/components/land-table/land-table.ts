import { Component, input } from '@angular/core';
import { LandSummary } from '../../../../models';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-land-table',
  imports: [StatCard],
  templateUrl: './land-table.html',
  styleUrl: './land-table.scss',
})
export class LandTable {
  readonly data = input.required<LandSummary>();
}

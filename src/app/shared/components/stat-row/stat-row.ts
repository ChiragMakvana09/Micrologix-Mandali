import { Component, input } from '@angular/core';

/** One "label ........ value" line inside a stat card. */
@Component({
  selector: 'app-stat-row',
  templateUrl: './stat-row.html',
  styleUrl: './stat-row.scss',
})
export class StatRow {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
}

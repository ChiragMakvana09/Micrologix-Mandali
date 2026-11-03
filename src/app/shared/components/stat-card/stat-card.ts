import { Component, input } from '@angular/core';

/** Titled card used by every dashboard block. Body is projected content. */
@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  readonly title = input.required<string>();
  /** Bootstrap Icons class suffix, e.g. "piggy-bank" */
  readonly icon = input<string>();
  /** Optional bold figure shown on the right of the title. */
  readonly badge = input<string | number>();
}

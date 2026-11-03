import { Component, input } from '@angular/core';
import { LoanSummary } from '../../../../models';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { StatRow } from '../../../../shared/components/stat-row/stat-row';
import { InrNumberPipe } from '../../../../shared/pipes/inr-number.pipe';

@Component({
  selector: 'app-loan-card',
  imports: [StatCard, StatRow, InrNumberPipe],
  template: `
    <app-stat-card title="ભરવાપાત્ર ધિરાણ" icon="cash-coin" [badge]="data().loanRef">
      <app-stat-row label="કુલ બાકી" [value]="data().totalOutstanding | inrNumber" />
      <app-stat-row label="ભરવાપાત્ર મુદલ" [value]="data().duePrincipal | inrNumber" />
      <app-stat-row label="ભરવાપાત્ર વ્યાજ" [value]="data().dueInterest | inrNumber:2" />
    </app-stat-card>
  `,
})
export class LoanCard {
  readonly data = input.required<LoanSummary>();
}

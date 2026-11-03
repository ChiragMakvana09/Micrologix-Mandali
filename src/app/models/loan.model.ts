/** ભરવાપાત્ર ધિરાણ - loan / dues summary. */
export interface LoanSummary {
  /** Bold number shown next to the card title in the design (e.g. 10300). */
  loanRef: number;
  /** કુલ બાકી */
  totalOutstanding: number;
  /** ભરવાપાત્ર મુદલ */
  duePrincipal: number;
  /** ભરવાપાત્ર વ્યાજ */
  dueInterest: number;
}

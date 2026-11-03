import { ProductAccount } from './api.model';

/** ભરવાપાત્ર ધિરાણ - loan / dues summary. */
export interface LoanSummary {
  /** Account / loan ref shown next to the card title. */
  loanRef: string;
  /** કુલ બાકી */
  totalOutstanding: number;
  /** ભરવાપાત્ર મુદલ */
  duePrincipal: number;
  /** ભરવાપાત્ર વ્યાજ */
  dueInterest: number;
  asOf: string;
  dueAccounts: ProductAccount[];
  allAccounts: ProductAccount[];
}

import { Sabhasad } from './api.model';
import { FdSummary } from './fd.model';
import { LandSummary } from './land.model';
import { LoanSummary } from './loan.model';
import { SavingsSummary } from './savings.model';
import { ShareSummary } from './share.model';
import { ProductAccount } from './api.model';

/** Everything the CIF dashboard shows for one selected member. */
export interface CifDashboard {
  cifId: string;
  member: Sabhasad | null;
  share: ShareSummary;
  savings: SavingsSummary;
  loan: LoanSummary;
  fd: FdSummary;
  land: LandSummary;
  loanAccounts: ProductAccount[];
}

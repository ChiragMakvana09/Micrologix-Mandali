import { ProductAccount } from './api.model';

/** સેવિંગ્સ - savings accounts summary. */
export interface SavingsSummary {
  totalAccounts: number;
  totalBalance: number;
  accounts: ProductAccount[];
}

import { ProductAccount } from './api.model';

/** શેર - share capital summary of a member. */
export interface ShareSummary {
  balance: number;
  dividend: number;
  accounts: ProductAccount[];
}

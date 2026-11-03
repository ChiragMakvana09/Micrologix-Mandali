export interface PacsEnvelope<T = unknown> {
  status?: number;
  message?: string;
  payload?: { data?: T };
  pager?: unknown;
}

export interface Sabhasad {
  sabhasad_no: string | number;
  name1?: string;
  share_amount?: number | string;
  savings_amount?: number | string;
  fd_amount?: number | string;
  dhiran_amount?: number | string;
  divi_amount?: number | string;
  hector_are?: number | string;
  varsdar_name1?: string;
  varsdar_relation?: string;
  kcc_no?: string;
  bank_acc?: string;
  ifsc?: string;
  v_name?: string;
  village?: string;
  [key: string]: unknown;
}

export interface ProductAccount {
  acc_no?: string | number;
  h_code?: string | number;
  h_name?: string;
  Balance?: number | string;
  balance?: number | string;
  other_data1?: string;
  other_data2?: string;
  demand?: number | string;
  vyajbaki?: number | string;
  due_date?: string;
  due_date_from?: string;
  pak1_name?: string;
  int_ret?: number | string;
  mudatvitirakam?: number | string;
  sabhasad_no?: string | number;
  [key: string]: unknown;
}

export interface BalanceData {
  product?: number | string;
  total_balance?: number | string;
  data?: ProductAccount[];
  sabhasad_no?: string | number;
}

export interface LandApiRow {
  v_name?: string;
  sarve_no?: string;
  hector_are?: number | string;
  mam_no?: string;
  sabhasad_type?: string;
}

export interface TransactionRow {
  date1?: string;
  date?: string;
  total_cr?: number | string;
  total_dr?: number | string;
  remark?: string;
}

export interface MiniStatementData {
  acc_no?: string | number;
  balance?: number | string;
  data?: TransactionRow[];
}

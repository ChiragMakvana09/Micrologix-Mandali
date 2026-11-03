/** One row of the land table (કુલ જમીન). */
export interface LandRecord {
  /** ક્રમ */
  serial: number;
  /** ગામ */
  village: string;
  /** સર્વે નંબર */
  surveyNo: string;
  /** ૮-અ ન. */
  eightANo: string;
  /**
   * હેક્ટર આરે - kept as text because the value is in hectare.are.sq-m
   * notation (e.g. "11.0348"), which is not a plain decimal.
   */
  hectareAare: string;
}

export interface LandSummary {
  /** કુલ જમીન, as supplied by the server (e.g. "10.0394"). */
  totalLand: string;
  records: LandRecord[];
}

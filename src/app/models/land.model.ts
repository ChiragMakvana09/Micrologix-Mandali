/** One row of the land table (કુલ જમીન). */
export interface LandRecord {
  serial: number;
  village: string;
  surveyNo: string;
  eightANo: string;
  hectareAare: string;
}

export interface LandSummary {
  totalLand: string;
  sabhasadType?: string;
  records: LandRecord[];
}

/** A customer / member (CIF = sabhasad). */
export interface Cif {
  id: string;
  /** CIF / sabhasad number shown in the dropdown */
  cifNo: string;
  name: string;
  village?: string;
}

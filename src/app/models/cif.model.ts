/** A customer / member (CIF = Customer Information File). */
export interface Cif {
  id: string;
  /** CIF number shown in the dropdown, e.g. "CIF-000101" */
  cifNo: string;
  name: string;
  village?: string;
}

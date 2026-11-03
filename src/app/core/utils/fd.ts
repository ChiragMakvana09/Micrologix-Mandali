export interface ParsedFd {
  fdr_no: string;
  first_date: string;
  last_date: string;
  interest: string;
  term: string;
  fdv_type: string;
  total_amount: string;
  paid_amount: string;
  fd_type: string;
}

/** `other_data1` is a comma-separated FD blob from productBalance (1005). */
export function parseFdData(str: unknown): ParsedFd {
  const [
    fdr_no = '',
    first_date = '',
    last_date = '',
    interest = '',
    term = '',
    fdv_type = '',
    total_amount = '',
    paid_amount = '',
    ...rest
  ] = String(str || '').split(',');

  return {
    fdr_no,
    first_date,
    last_date,
    interest,
    term,
    fdv_type,
    total_amount,
    paid_amount,
    fd_type: rest.join(',').trim(),
  };
}

export function fdTermLabel(fd: ParsedFd): string {
  const unit = String(fd.fdv_type).trim() === '0' ? 'મહિના' : 'દિવસ';
  return `${fd.term} ${unit}`;
}

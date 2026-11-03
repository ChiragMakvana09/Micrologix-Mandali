/** Indian grouping, matching the PACS WhatsApp `fmtINR` helper. */
export function fmtInr(n: unknown, decimals = 0): string {
  const num = Number(n || 0);
  const [int, dec] = Math.abs(num).toFixed(decimals).split('.');
  const last3 = int.slice(-3);
  const rest = int.slice(0, -3);
  const grouped = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3 : last3;
  return (num < 0 ? '-' : '') + grouped + (dec ? '.' + dec : '');
}

/** Normalise API dates (YYYYMMDD, ISO, already DD-MM-YYYY) to DD-MM-YYYY. */
export function fmtDate(d: unknown): string {
  if (!d) return '-';
  const str = String(d).trim();

  if (/^\d{8}$/.test(str)) {
    return `${str.slice(6, 8)}-${str.slice(4, 6)}-${str.slice(0, 4)}`;
  }

  const iso = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[3]}-${iso[2]}-${iso[1]}`;

  const dmy = str.match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
  if (dmy) return `${dmy[1]}-${dmy[2]}-${dmy[3]}`;

  return str;
}

export function todayIst(): string {
  const ist = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  return `${String(ist.getUTCDate()).padStart(2, '0')}-${String(ist.getUTCMonth() + 1).padStart(2, '0')}-${ist.getUTCFullYear()}`;
}

export function parseApiDate(d: unknown): Date | null {
  if (!d) return null;
  const str = String(d).trim();
  let y: string;
  let m: string;
  let day: string;

  if (/^\d{8}$/.test(str)) {
    y = str.slice(0, 4);
    m = str.slice(4, 6);
    day = str.slice(6, 8);
  } else {
    const iso = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
    const dmy = str.match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
    if (iso) {
      y = iso[1];
      m = iso[2];
      day = iso[3];
    } else if (dmy) {
      y = dmy[3];
      m = dmy[2];
      day = dmy[1];
    } else {
      return null;
    }
  }

  const date = new Date(Number(y), Number(m) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}

export function num(v: unknown): number {
  const n = Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

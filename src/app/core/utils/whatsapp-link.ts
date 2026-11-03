import { ParamMap } from '@angular/router';
import { PacsCredentials } from '../services/session.service';

type ParamSource = ParamMap | URLSearchParams;

function read(source: ParamSource, keys: string[]): string {
  for (const key of keys) {
    const value = source.get(key)?.trim();
    if (value) return value;
  }
  return '';
}

/**
 * WhatsApp opens the app with society + member identity in the URL.
 * Accepted aliases cover the PACS bot variants we have seen.
 */
export function credentialsFromParams(source: ParamSource): PacsCredentials | null {
  const businessNumber = read(source, [
    'business_number',
    'businessNumber',
    'bno',
    'business-no',
    'business_no',
  ]);
  const businessCode = read(source, [
    'business_code',
    'businessCode',
    'short_name',
    'shortname',
    'shortName',
    'code',
  ]);
  const mobile = read(source, [
    'sabhasad_mobile',
    'mobile',
    'phone',
    'particular_no',
    'particular',
  ]);

  if (!businessNumber || !businessCode || !mobile) return null;

  return { businessNumber, businessCode, mobile };
}

export function isDemoLink(source: ParamSource): boolean {
  const flag = source.get('demo')?.trim().toLowerCase();
  return flag === '1' || flag === 'true' || flag === 'yes';
}

export function credentialsFromSearch(search: string): PacsCredentials | null {
  const q = search.startsWith('?') ? search.slice(1) : search;
  return credentialsFromParams(new URLSearchParams(q));
}

export function isDemoSearch(search: string): boolean {
  const q = search.startsWith('?') ? search.slice(1) : search;
  return isDemoLink(new URLSearchParams(q));
}

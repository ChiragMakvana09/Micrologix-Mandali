import { Pipe, PipeTransform } from '@angular/core';
import { fmtInr } from '../../core/utils/format';

/** Formats numbers with Indian grouping: 1500500 -> 15,00,500 */
@Pipe({ name: 'inrNumber' })
export class InrNumberPipe implements PipeTransform {
  transform(value: number | string | null | undefined, decimals = 0): string {
    return value == null || value === '' ? '' : fmtInr(value, decimals);
  }
}

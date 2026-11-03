import { Pipe, PipeTransform } from '@angular/core';

const formatter = new Intl.NumberFormat('en-IN');

/** Formats numbers with Indian grouping: 1500500 -> 15,00,500 */
@Pipe({ name: 'inrNumber' })
export class InrNumberPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    return value == null ? '' : formatter.format(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { fmtDate } from '../../core/utils/format';

@Pipe({ name: 'pacsDate' })
export class PacsDatePipe implements PipeTransform {
  transform(value: unknown): string {
    return fmtDate(value);
  }
}

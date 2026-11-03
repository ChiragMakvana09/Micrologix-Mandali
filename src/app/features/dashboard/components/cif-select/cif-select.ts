import { Component, input, model } from '@angular/core';
import { Cif } from '../../../../models';

@Component({
  selector: 'app-cif-select',
  templateUrl: './cif-select.html',
  styleUrl: './cif-select.scss',
})
export class CifSelect {
  readonly cifs = input.required<Cif[]>();
  /** Selected CIF id; supports two-way binding with [(selectedId)]. */
  readonly selectedId = model<string>('');

  protected onChange(event: Event): void {
    this.selectedId.set((event.target as HTMLSelectElement).value);
  }
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CifService } from '../../core/services/cif.service';
import { PRODUCT_LABELS } from '../../core/constants/products';
import { InrNumberPipe } from '../../shared/pipes/inr-number.pipe';

@Component({
  selector: 'app-cards',
  imports: [RouterLink, InrNumberPipe],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  private readonly cifService = inject(CifService);
  protected readonly dashboard = this.cifService.lastDashboard;
  protected readonly labels = PRODUCT_LABELS;

  constructor() {
    this.cifService.ensureDashboard().subscribe();
  }
}

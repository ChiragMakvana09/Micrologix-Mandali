import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Temporary page for modules that will be built one by one. */
@Component({
  selector: 'app-placeholder-page',
  template: `
    <div class="text-center text-secondary py-5">
      <i class="bi bi-tools fs-1 d-block mb-3"></i>
      <h1 class="section-title">{{ title }}</h1>
      <p class="mt-2 mb-0">આ પેજ ટૂંક સમયમાં ઉમેરાશે.</p>
    </div>
  `,
})
export class PlaceholderPage {
  protected readonly title: string = inject(ActivatedRoute).snapshot.data['title'] ?? '';
}

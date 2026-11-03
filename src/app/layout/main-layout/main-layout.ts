import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomMenu } from '../bottom-menu/bottom-menu';
import { Header } from '../header/header';
import { SidePanel } from '../side-panel/side-panel';

/** App shell: header + routed page + bottom menu + slide-in side panel. */
@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, BottomMenu, SidePanel],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected readonly panelOpen = signal(false);
  protected readonly isDesktop = signal(false);

  constructor() {
    if (typeof matchMedia === 'function') {
      const mq = matchMedia('(min-width: 992px)');
      this.isDesktop.set(mq.matches);
      mq.addEventListener('change', (e) => this.isDesktop.set(e.matches));
    }
  }

  @HostListener('document:keydown.escape')
  protected closePanel(): void {
    this.panelOpen.set(false);
  }
}

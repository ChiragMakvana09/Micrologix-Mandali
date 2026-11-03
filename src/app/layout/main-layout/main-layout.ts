import { Component, signal } from '@angular/core';
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
}

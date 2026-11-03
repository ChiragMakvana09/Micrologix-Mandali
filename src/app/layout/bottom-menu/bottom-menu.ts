import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from '../menu.config';

@Component({
  selector: 'app-bottom-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bottom-menu.html',
  styleUrl: './bottom-menu.scss',
})
export class BottomMenu {
  protected readonly items = MENU_ITEMS;
}

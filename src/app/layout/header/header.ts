import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoticeService } from '../../core/services/notice.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly themeService = inject(ThemeService);
  protected readonly notices = inject(NoticeService);
  readonly menuClick = output<void>();
  readonly showMenu = input(true);
}

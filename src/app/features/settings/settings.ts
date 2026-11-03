import { Component, inject } from '@angular/core';
import { SessionService } from '../../core/services/session.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly session = inject(SessionService);
  protected readonly theme = inject(ThemeService);
}

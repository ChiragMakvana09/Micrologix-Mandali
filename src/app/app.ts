import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { WhatsappBootstrapService } from './core/services/whatsapp-bootstrap.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  constructor(_theme: ThemeService, _link: WhatsappBootstrapService) {}
}

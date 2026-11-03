import { Component, inject } from '@angular/core';
import { NoticeService } from '../../core/services/notice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  protected readonly notices = inject(NoticeService);

  constructor() {
    this.notices.markAllRead();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  options = [
    {
      width: '40px',
      icon: 'control-room.svg',
    },
    {
      width: '27.17px',
      icon: 'dashboard.svg',
    },
    {
      width: '32.6px',
      icon: 'elements.svg',
    },
    {
      width: '43.95px',
      icon: 'settings.svg',
    },
    {
      width: '43.57px',
      icon: 'notifications.svg',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  details: any[] = [
    {
      text: '2/3',
      icon: './assets/gas-station-svgrepo-com.svg',

      content: 'Monitored Stations',
    },
    {
      text: '20s',
      icon: './assets/pngwing.com.png',

      content: 'Last Update',
    },
  ];
}

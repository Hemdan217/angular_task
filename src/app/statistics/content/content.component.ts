import { Component } from '@angular/core';
import { DataObject } from '../types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  values: DataObject[] = [
    {
      value: '71,028',
      unit: 'EGP',
      description: 'Total Value',
      indicator: -2,
      active: true,
    },
    {
      value: '20,000',
      unit: 'm',
      description: 'Total Sales',
      indicator: 50,
    },
    {
      value: '20,000',
      unit: 'm',
      description: 'Avg Sales',
      indicator: -50,
    },
    {
      value: '1567',
      unit: '',
      description: 'Total Transaction Count',
      indicator: 20,
    },
  ];
}

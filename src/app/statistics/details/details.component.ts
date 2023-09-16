import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Chart, { ChartType, ChartData } from 'chart.js/auto';
import { DataObject } from '../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements AfterViewInit {
  @Input() values: DataObject[] = [];
  isActive = 'graph';

  chart!: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  setActive(button: string) {
    this.isActive = button;
    setTimeout(() => {
      if (this.isActive === 'graph') {
        this.createChart();
      } else {
        this.chart.destroy();
      }
    }, 100);
  }

  createChart() {
    const data: ChartData = {
      labels: [
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy 1',
      ],
      datasets: [
        {
          label: 'STATIONS ACTIVATES OVERVIEW',
          data: [260, 140, 190, 225, 130],
          fill: true,
          maxBarThickness: 10,
          backgroundColor: '#FF7F5C',
          borderColor: '#009ACF',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
      ],
    };

    this.chart = new Chart('hi', {
      type: 'bar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 4,
          },
        },
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: Array.from(
        { length: 12 },
        (_, i) => `${i * 2 < 10 ? '0' : ''}${i * 2}.00`
      ),
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: '#009ACF33',
          borderColor: '#009ACF',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100, 28, 48, 40, 19, 96],
          fill: true,
          backgroundColor: '#00CBC033',
          borderColor: '#00CBC0',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    };
    this.chart = new Chart('MyChart', {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 1,
          },
        },
      },
    });
  }
}

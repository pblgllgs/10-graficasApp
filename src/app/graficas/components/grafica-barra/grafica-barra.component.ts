import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  
  @Input() horizontal : boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [
    //'2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor: '#5D63F5', hoverBackgroundColor: '#FA8253' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor: '#64B1EB', hoverBackgroundColor: '#F55C61' },
    //{ data: [15, 78, 20, 60, 33, 10, 5], label: 'Series C' ,backgroundColor: '#5DF5E5', hoverBackgroundColor: '#F753FA' }
  ];

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

}

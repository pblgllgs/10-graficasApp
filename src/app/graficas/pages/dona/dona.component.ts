import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  public colores: Color[] = [
    {
      backgroundColor: [
        '#56F694',
        '#4AD459',
        '#7DEB5F',
        '#98D44A',
        '#E8F656',
      ]
    }
  ]

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others', 'extras'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,250,350]

  ];
  public doughnutChartType: ChartType = 'doughnut';

}

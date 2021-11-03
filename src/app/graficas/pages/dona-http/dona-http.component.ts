import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    /* Metodo 1
      this.graficasService.getUsuariosRedesSociales()
      .subscribe(data =>{

        const labels = Object.keys (data);
        const values = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);

      }); */
    
      //metodo 2
      this.graficasService.getUsuariosredessociales2()
        .subscribe( ({labels, values}) =>{
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
        });

  }

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others', 'extras'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100,250,350]
  ];
  public doughnutChartType: ChartType = 'doughnut';

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

}

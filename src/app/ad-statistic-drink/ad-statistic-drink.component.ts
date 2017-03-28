import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';


@Component({
  selector: 'app-ad-statistic-drink',
  templateUrl: './ad-statistic-drink.component.html',
  styleUrls: ['./ad-statistic-drink.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdStatisticDrinkComponent implements OnInit{
  chartData: any;
  chartOptions: any;
    public pie_ChartData = [
              ['Task', 'Hours per Day'],
              ['Work',     11],
              ['Eat',      2],
              ['Commute',  2],
              ['Watch TV', 2],
              ['Sleep',    7] ];
    public pie_ChartOptions  = {
      title: 'My Daily Activities',
      width: 900,
      height: 500
    };

    ngOnInit(){
      console.log("ABCBJSJJAHD");
    }

}

import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { AdStatisticDrinkService } from './ad-statistic-drink.service';
import { Rating } from '../models/Rating';

@Component({
  selector: 'app-ad-statistic-drink',
  templateUrl: './ad-statistic-drink.component.html',
  styleUrls: ['./ad-statistic-drink.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdStatisticDrinkComponent implements OnInit{
  chartData: any;
  chartOptions: any;
  ratingArr: Rating[];
  constructor(private adStatisticDrinkService: AdStatisticDrinkService) {

  }
    public pie_ChartData;
    public pie_ChartOptions  = {
      title: 'Statistic by food',
      width: 600,
      height: 350
    };



    ngOnInit(){
      this.adStatisticDrinkService.getRatingDrink()
          .subscribe(ratingArr => {this.ratingArr = ratingArr; console.log(this.ratingArr);
            this.pie_ChartData = [
              ['Task', 'Hours per Day'],
              ['5 *',     this.ratingArr[4].numOfPeople],
              ['4 *',     this.ratingArr[3].numOfPeople],
              ['3 *',  this.ratingArr[2].numOfPeople],
              ['2 *', this.ratingArr[1].numOfPeople],
              ['1 *',    this.ratingArr[0].numOfPeople]
            ]; console.log(this.pie_ChartData);
            });
    }


}

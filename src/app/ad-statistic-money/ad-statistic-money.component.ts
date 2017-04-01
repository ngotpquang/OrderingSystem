import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-statistic-money',
  templateUrl: './ad-statistic-money.component.html',
  styleUrls: ['./ad-statistic-money.component.scss']
})
export class AdStatisticMoneyComponent {
  public line_ChartData = [
        ['Month', 'Money (million)'],
        ['1', 10],
        ['2', 30],
        ['3', 40],
        ['4', 45],
        ['5', 42],
        ['6', 48]];

  public line_ChartOptions = {
        title: 'Company Performance',
        curveType: 'function',
        legend: {
            position: 'bottom'
        }
    };

}

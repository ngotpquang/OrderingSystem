import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { StatisticComponent } from './../statistic/statistic.component';
import { AdStatisticDrinkComponent } from './../ad-statistic-drink/ad-statistic-drink.component';
import { AdStatisticMoneyComponent } from './../ad-statistic-money/ad-statistic-money.component';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { AdStatisticDrinkService } from './../ad-statistic-drink/ad-statistic-drink.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    StatisticComponent,
    AdStatisticDrinkComponent,
    AdStatisticMoneyComponent,
    GoogleChart
  ],
  providers: [
    AdStatisticDrinkService
  ]
})
export class AdminModule {}

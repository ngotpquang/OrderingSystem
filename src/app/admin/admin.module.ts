import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdStatisticDrinkComponent } from './../ad-statistic-drink/ad-statistic-drink.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdStatisticDrinkComponent,
  ],
  providers: [
  ]
})
export class AdminModule {}

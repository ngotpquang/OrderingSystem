import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AdStatisticDrinkComponent }     from './../ad-statistic-drink/ad-statistic-drink.component';
import { StatisticComponent } from './../statistic/statistic.component';
import { CanDeactivateGuard }     from './../can-deactivate-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'statistic-drink',
        component: AdStatisticDrinkComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: StatisticComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

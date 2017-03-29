import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';

import { CanDeactivateGuard }     from './../can-deactivate-guard.service';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { UserHistoryComponent } from './../user-history/user-history.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'history',
        component: UserHistoryComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }

import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { StatisticComponent }     from './../statistic/statistic.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    StatisticComponent,
    UserProfileComponent
  ],
  providers: [
  ]
})
export class UserModule {}

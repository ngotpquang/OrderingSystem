import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HistoryComponent } from './history.component';

import { HistoryRoutingModule } from './history-routing.module';
import { UserHistoryComponent } from './../user-history/user-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HistoryRoutingModule
  ],
  declarations: [
    HistoryComponent,
    UserHistoryComponent
  ],
  providers: [
  ]
})
export class HistoryModule {}

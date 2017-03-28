import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }      from './menu/menu.component';
import { AppComponent }  from './app.component';
// import { UserComponent } from './user/user.component';
// import { AdStatisticDrinkComponent } from './ad-statistic-drink/ad-statistic-drink.component';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { CanDeactivateGuard } from './can-deactivate-guard.service'

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  // },
  {
    path: 'user',
    loadChildren: "app/user/user.module#UserModule",
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })],
  exports: [ RouterModule ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {}

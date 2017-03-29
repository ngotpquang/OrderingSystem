import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule }     from './app-routing.module';
import { provideAuth, AuthHttp, AuthConfig }      from 'angular2-jwt';


import { MenuService } from './menu/menu.services';
import { MenuDirective } from './menu/menu.directive';
// import { UserComponent } from './user/user.component';

import {Ng2PaginationModule} from 'ng2-pagination';
import { RatingComponent } from './rating/rating.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@Directive({
  selector: 'input'
})

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDirective,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

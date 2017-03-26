import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule }     from './app-routing.module';
import { provideAuth, AuthHttp, AuthConfig }      from 'angular2-jwt';

import { MenuService } from './menu/menu.services';
import { MenuDirective } from './menu/menu.directive';

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
    GoogleChart
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
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

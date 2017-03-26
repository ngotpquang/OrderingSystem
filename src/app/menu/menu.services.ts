import { Injectable, HostListener, Directive } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';

import { FoodAndBeverage } from '../models/FoodAndBeverage';


@Injectable()
export class MenuService {

  private foodUrl = "/src/app/models/FoodAndBeverage-data.json";
  constructor(private http: Http) {}

  getFood(id:Number): Observable<FoodAndBeverage[]> {
    return this.getAllFood()
        .map(food => food.filter(afood => afood.foodAndBeverageTypeId === id ));
  }

  getDetail(id:Number): Observable<FoodAndBeverage> {
    return this.getAllFood()
        .map(food => food.filter(afood => afood.foodAndBeverageId === id ))[0];
  }

  getAllFood(): Observable<FoodAndBeverage[]> {
    return this.http.get(this.foodUrl)
        .map(response => response.json().data as FoodAndBeverage[]);
  }

  // var searching = document.getElementsByClassName("search__box")[0];
  // searching.addEventListener("keypress", function(event) {

  // })
}

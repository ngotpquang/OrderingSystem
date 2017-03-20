import { Injectable } from '@angular/core';
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
    return this.http.get(this.foodUrl)
        .map(response => response.json().data as FoodAndBeverage[])
        .map(food => food.filter(afood => afood.foodAndBeverageTypeId === id ));
  }

  getDetail(id:Number): Observable<FoodAndBeverage> {
    return this.http.get(this.foodUrl)
        .map(response => response.json().data as FoodAndBeverage[])
        .map(food => food.filter(afood => afood.foodAndBeverageId === id ))[0];
  }

}

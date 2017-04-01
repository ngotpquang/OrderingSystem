import { Injectable, HostListener, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { FoodAndBeverage } from '../models/FoodAndBeverage';
import { Rating } from '../models/Rating';


@Injectable()
export class MenuService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private foodUrl = "/src/app/models/FoodAndBeverage-data.json";
  private rateUrl;
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

  //get from JSON rating, check exist, post into JSON
  getRate(type: string, id: number): Observable<Rating> {
    this.rateUrl = "http://localhost:3000/"+type+"/"+id;
    console.log("url "+ this.rateUrl);

    return this.http.get(this.rateUrl)
        .map(response => response.json() as Rating);
  }

  updateRate(type:string, rating: Rating): Promise<Rating> {
    var rateUrl;
    if(type === "food") rateUrl = "http://localhost:3000/food/"+rating.id;
    else if(type === "service") rateUrl = "http://localhost:3000/service/"+rating.id;
    return this.http.put(rateUrl, JSON.stringify(rating), {headers: this.headers})
          .toPromise()
          .then(() => rating);
  }

  private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
  // var searching = document.getElementsByClassName("search__box")[0];
  // searching.addEventListener("keypress", function(event) {

  // })
}

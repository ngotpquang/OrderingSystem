import { Injectable, HostListener, Directive, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FoodAndBeverage } from '../models/FoodAndBeverage';
import { MenuService } from './menu.services';


@Directive({
  selector: '[componentFood]',

})

export class MenuDirective {
  // currentFood : FoodAndBeverage[];
  private menuService: MenuService;
  text: string;
  textSearch: string;
  currentFood = [];
  constructor(private elementRef: ElementRef) {}
  // private elementRef: ElementRef;

  @Input ('componentFood') allFood: FoodAndBeverage[];
  // @Input ('text') textSearch: string;

  @HostListener('document:keydown', ['$event'])
  handleSearch(event) {

    // reverst allfood
    // let that = this;
    if(this.currentFood.length > 0) {
      this.currentFood.forEach((value, index) => {
        this.allFood.push(value);
      }, this);
    }

    var BACKSPACE_KEY= 8;
    var keySearch = String.fromCharCode(event.keyCode);
    var currentText="";
    if(this.text != undefined) {
      currentText = this.text + keySearch;
    }
    else currentText = keySearch;
    this.text = currentText;

    if(event.keyCode == BACKSPACE_KEY) {
      currentText = this.text.slice(0, this.text.length-2);
      this.text = currentText;
    }

    console.log("current search text "+currentText.toLocaleLowerCase());

    // var currentFood = [];
    this.allFood.forEach(function(value, index) {
      this.currentFood.push(value);
    }, this);

    var indexArr = [];
    this.currentFood.forEach(function(value, index) {
      console.log("name food "+ value.name);
      if(!value.name.includes(currentText.toLocaleLowerCase())) {
        indexArr.push(index);
        console.log(index + "-" + value.name);
      }
    }, this);
    var size = indexArr.length;

// push food out of array => filter for search
    for (var x = 0; x < size; x++ ) {
      this.allFood.splice(indexArr[x], 1);
      if(size > 0 && x < (size -1)) {
        for (var y = 1; y < size; y++ ) {
          indexArr[y] -= 1;
        }
      }
    }
  }
}

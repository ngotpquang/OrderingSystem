import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.services';
import { FoodAndBeverage } from '../models/FoodAndBeverage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  food: FoodAndBeverage[];
  errorMessage: string;
  constructor( private menuService: MenuService) { }

  ngOnInit() {
    console.log("food ",this.food);
    this.menuService.getFood(1)
        .subscribe(food => this.food = food);
    console.log("food ",this.food);
  }

}

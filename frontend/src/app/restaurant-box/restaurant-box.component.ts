import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { RestaurantsComponent } from '../restaurants/restaurants.component';

@Component({
  selector: 'app-restaurant-box',
  templateUrl: './restaurant-box.component.html',
  styleUrls: ['./restaurant-box.component.css']
})
export class RestaurantBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

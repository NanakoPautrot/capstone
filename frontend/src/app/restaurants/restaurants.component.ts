import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
//import { RESTAURANTS } from '../mock-restaurants-list';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from '../in-memory-data.service';
import { RestaurantService } from '../restaurant.service';
import { RestaurantRegionService } from '../restaurant-region.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})


export class RestaurantsComponent implements OnInit {

restaurants: Restaurant[];

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
  this.getRestaurants();
  }


  getRestaurants(): void {
    this.restaurantService.getRestaurants()
    .subscribe(restaurants => console.log(restaurants));
  }

}



import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { RestaurantService } from '../restaurant.service';
import { RestaurantRegionService } from '../restaurant-region.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})


export class RestaurantsComponent implements OnInit {

restaurants: any;

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }

  //constructor(private restaurantService : RestaurantService, private route: ActivatedRoute, private router: Router, private restaurantRegionService: RestaurantRegionService) { }
 
  ngOnInit() {
  this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
    .subscribe(res => this.restaurants=res);
  }

}



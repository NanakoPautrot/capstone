import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock-restaurants-list';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { RestaurantRegionService } from '../restaurant-region.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})


export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  //constructor(private restaurantService : RestaurantService, private route: ActivatedRoute, private router: Router, private restaurantRegionService: RestaurantRegionService) { }
  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }
  ngOnInit() {
  this.getRestaurants();
  //this.restaurantRegionService.postRegion(this.route.queryParams).subscribe();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
    .subscribe((restaurants)=>{
      console.log(restaurants);
      restaurants=this.restaurants;
    } )
    //.subscribe(restaurants => console.log(restaurants));
  } 
  
  // getRestaurants(): void {
  //   this.restaurantService.getRestaurants()
  //   .subscribe(restaurants => this.restaurants = restaurants);
  //   console.log(this.restaurants); //this function is to retrieve the heroes from the service
  // }
 

}



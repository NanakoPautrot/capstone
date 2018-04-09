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

<<<<<<< HEAD
  restaurants: Restaurant[];
=======
restaurants: Restaurant[];

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64

  //constructor(private restaurantService : RestaurantService, private route: ActivatedRoute, private router: Router, private restaurantRegionService: RestaurantRegionService) { }
  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }
  ngOnInit() {
  this.getRestaurants();
<<<<<<< HEAD
  //this.restaurantRegionService.postRegion(this.route.queryParams).subscribe();
=======
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
<<<<<<< HEAD
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
 
=======
    .subscribe(restaurants => console.log(restaurants));
  }
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64

}



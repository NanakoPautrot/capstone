import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {

  restaurant: any;
  lat: number;
  lng: number;
  zoom = 18;

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
    if (this.route.queryParams['_value']) {
      this.getRestaurant(this.route.queryParams['_value'].id);
    }
  }

  getRestaurant(id): void {
    this.restaurantService.getRestaurant(id).subscribe((res: any) => {
      this.restaurant = res[0];
      this.lat = Number(res[0].latitude);
      this.lng = Number(res[0].longitude);
      console.log(res);
    });
  }
}

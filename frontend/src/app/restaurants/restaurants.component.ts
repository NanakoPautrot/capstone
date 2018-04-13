import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})


export class RestaurantsComponent implements OnInit {

restaurants: any;
district:string;
facility?:Number;
region: string;
lat: number;
lng: number;

options = {
  enableHighAccuracy: false,
  timeout: 30000,
  maximumAge: 0
};

error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) { }

  
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);
       this.district= queryParams.district;
      }, this.error, this.options);
      if (queryParams.district,queryParams.facility){
        this.getRestaurants(queryParams.district,queryParams.facility);
      } else {
        this.getRestaurants('Aberdeen',1);
      }
    })

    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.lat = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    //   console.log(this.lat);
    //   console.log(this.lng);
    // }, this.error, this.options);
    // if (this.route.queryParams['_value'].district) {
    //   this.getRestaurants(this.route.queryParams['_value'].district);
    // } else {
    //   this.getRestaurants('Aberdeen');
    // }
  }
  
    getRestaurants(district,facility): void {
      this.restaurantService.getRestaurants(district,facility).subscribe((res: any) => {
        const ref = [];
        res = res.filter((element, idx) => {
          if (ref.indexOf(element.id) === -1) {
            ref.push(element.id);
            return element;
          }
        });
        this.restaurants = res;
      });
    }
    openLink(path: string) {
      console.log(path);
    }
  }
  
  
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    // tslint:disable-next-line:max-line-length
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }



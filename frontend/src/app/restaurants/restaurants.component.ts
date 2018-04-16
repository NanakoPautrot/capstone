import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { RestaurantService } from '../restaurant.service';
import { FacilitiesService } from '../facilities.service';
import { LocationsService } from '../locations.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})


export class RestaurantsComponent implements OnInit {

  restaurantsRef: any;
  restaurants: any;
  district: string;
  facility?: number;
  region: string;
  lat: number;
  lng: number;
  selectedLocation: string;
  subscription_location: Subscription;
  subscription_facility: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService, private locationsService: LocationsService, private facilitiesService: FacilitiesService) {
    this.subscription_location = this.locationsService.getLocation().subscribe(location => {
      this.getRestaurantsByDistrict(location.selectedLocation);
      this.district = location.selectedLocation;
      
    });
    this.subscription_facility = this.facilitiesService.getFacility().subscribe(facility => {
      this.restaurants = this.filterRestaurantByFacility(facility.facilityId);
    });
   }

   ngOnInit() {
    if (this.route.queryParams['_value'].district) {
      this.district = this.route.queryParams['_value'].district;
      this.getRestaurantsByDistrict(this.route.queryParams['_value'].district);
    } else {
      this.getRestaurants();
    }
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe((res: any) => {
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
  getRestaurantsByDistrict(district?): void {
    this.restaurantService.getRestaurantsByDistrict(district).subscribe((res: any) => {
      const ref = [];
      res = res.filter((element, idx) => {
        if (ref.indexOf(element.id) === -1) {
          ref.push(element.id);
          return element;
        }
      });
      this.restaurantsRef = res;
      this.restaurants = res;
    });
  }
  filterRestaurantByFacility(id) {
    return this.restaurantsRef.filter((restaurant) => {
      return restaurant['facility_id'] === id;
    });
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

  
  

   
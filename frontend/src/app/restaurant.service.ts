import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Restaurant } from './restaurant';

import { InMemoryDataService } from './in-memory-data.service'
import { RestaurantsComponent } from './restaurants/restaurants.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};



@Injectable()
export class RestaurantService {
 
  constructor(private http: HttpClient) { }

 // getRestaurants(): Observable <Restaurant[]> {
    //return of (RESTAURANTS);
    
    //return this.http.get<Restaurant[]>(this.restaurantsUrl);
   // return this.http.get(`${environment}/api/restaurants`).map((res)=>res.json());
   //getRestaurants(district: string = '', facility: number = null) { // = 'Hong Kong
   //return this.http.get('http://localhost:3030/restaurants/?district=' + district + '&facility=' + facility)
   getRestaurants(district: string/*, facility:Number*/) { // = 'Hong Kong
    return this.http.get('http://localhost:3030/restaurants?district=' + district /*+ '&facility ='+ facility*/);
  }

  getRestaurant(id: string) { // = 'Hong Kong
    return this.http.get('http://localhost:3030/restaurants/restaurant?id=' + id);
  }

}

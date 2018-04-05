import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants-list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class RestaurantService {
  private restaurantsUrl = 'api/restaurants';  //URL to web api

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable <Restaurant[]> {
    return of (RESTAURANTS);
    //return this.http.get<Restaurant[]>(this.restaurantsUrl)
    
  }

}

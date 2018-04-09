import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants-list';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};



@Injectable()
export class RestaurantService {
  //private restaurantsUrl = 'api/restaurants';  //URL to web api
  private restaurantsUrl = 'localhost:8080/restaurants';

  constructor(private http: HttpClient) { }

  // getRestaurants(): Observable <Restaurant[]> {
  //   //return of (RESTAURANTS);
  //   return this.http.get<Restaurant[]>(this.restaurantsUrl)
    
  // }

  getRestaurants(){
    return this.http.get('http://localhost:8080/restaurants/Kowloon Bay/4');
    
   }

}

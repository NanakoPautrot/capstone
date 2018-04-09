import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Restaurant } from './restaurant';
//import { RESTAURANTS } from './mock-restaurants-list';
import { InMemoryDataService } from './in-memory-data.service'
import { RestaurantsComponent } from './restaurants/restaurants.component';



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};



@Injectable()
export class RestaurantService {
<<<<<<< HEAD
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
=======
 // private restaurantsUrl = '/api/restaurants';  //URL to web api

  constructor(private http: HttpClient) { }

 // getRestaurants(): Observable <Restaurant[]> {
    //return of (RESTAURANTS);
    
    //return this.http.get<Restaurant[]>(this.restaurantsUrl);
   // return this.http.get(`${environment}/api/restaurants`).map((res)=>res.json());
   getRestaurants() {
   return this.http.get('http://localhost:3030/restaurants')
   
  }
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64

}

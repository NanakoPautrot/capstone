import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantRegionService {

  constructor(private http:Http) { }

  // postRegion(input) {
  //     return this.http.post('http://localhost:8080/restaurants', input).map(res => res.json());
  // }

  getRestaurants() {
    return this.http.get('http://localhost:8080/restaurants').map(res => res.json())
  }

}

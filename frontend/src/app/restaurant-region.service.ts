import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantRegionService {

  constructor(private http:Http) { }

<<<<<<< HEAD
  postRegion(input) {
      //return this.http.post('http://localhost:8080/api/region', input).map(res => res.json());
      return this.http.post('http://localhost:8080/restaurants', input)
=======
  // postRegion(input) {
  //     return this.http.post('http://localhost:8080/restaurants', input).map(res => res.json());
  // }

  getRestaurants() {
    return this.http.get('http://localhost:8080/restaurants').map(res => res.json())
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64
  }

}

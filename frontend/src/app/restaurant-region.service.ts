import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantRegionService {

  constructor(private http:Http) { }

  postRegion(input) {
      //return this.http.post('http://localhost:8080/api/region', input).map(res => res.json());
      return this.http.post('http://localhost:8080/restaurants', input)
  }

}

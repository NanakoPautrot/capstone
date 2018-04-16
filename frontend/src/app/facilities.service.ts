import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class FacilitiesService {

  private subject = new Subject<any>();

  constructor(private http:HttpClient) { }

getFacilities(){
   return this.http.get('http://localhost:3030/facilities');
}
sendFacility(id: number) {
  this.subject.next({ facilityId: id});
}
getFacility(): Observable<any> {
  return this.subject.asObservable();
}
getRestaurantsByFacility(district, facility) {
  return this.http.get('http://localhost:3030/restaurants/restaurants_facility?district=' + district + '&facility=' + facility);
}
}

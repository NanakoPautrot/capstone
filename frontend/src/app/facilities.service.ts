import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class FacilitiesService {

  constructor(private http:HttpClient) { }

getFacilities(){
   return this.http.get('http://localhost:3030/facilities')
}
getRestauByFacilities(){
  
}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class LocationsService {

  private subject = new Subject<any> ();

  constructor(private http:HttpClient) { }

  getDistricts() {
    return this.http.get('http://localhost:3030/districts/');
  }
  sendLocation(location: string){
    this.subject.next({ selectedLocation: location});
  }
  getLocation(): Observable<any> {
    return this.subject.asObservable();
  }
}

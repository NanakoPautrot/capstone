import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import {FacilitiesService} from '../facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})

export class FacilitiesComponent implements OnInit {

  facilities: any;

  constructor(private route: ActivatedRoute, private router: Router, private facilitiesService: FacilitiesService) { }

  ngOnInit() {
    this.getFacilities();
  }
  getFacilities():void{
    this.facilitiesService.getFacilities().
    subscribe(res => {
      this.facilities = res; 
      console.log(res);
  });

}
}
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { LocationsService } from '../locations.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

districts: any;
  constructor(private route: ActivatedRoute, private router: Router, private locationsService: LocationsService) { }

  ngOnInit() {
    this.getDistricts();
  }

  getDistricts(): void {
    this.locationsService.getDistricts()
    .subscribe(res => this.districts=res);
    
  }

}

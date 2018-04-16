import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { RestaurantBoxComponent } from '../restaurant-box/restaurant-box.component';
import { FacilitiesService } from '../facilities.service';
import { LocationsService } from '../locations.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})

export class FacilitiesComponent implements OnInit {

  facilities: any;
  district: any;
  currentFacility: any;
  locationSubscribe: Subscription;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private facilitiesService: FacilitiesService, private locationService: LocationsService) { }

  ngOnInit() {
    this.getFacilities();
    this.district = this.route.queryParams['_value'].district;
    this.locationSubscribe = this.locationService.getLocation().subscribe((data) => {
      this.currentFacility = null;
    });
  }
  getFacilities(): void {
    this.facilitiesService.getFacilities().subscribe(res => {
      this.facilities = res;
    });
  }

  clickFacilities(facility) {
    this.currentFacility = facility;
    this.router.navigate(['/restaurants'], { queryParams: { district: this.district, id: facility  } } );
    this.facilitiesService.sendFacility(facility);
  }
}

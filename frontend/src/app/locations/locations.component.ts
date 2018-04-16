import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { LocationsService } from '../locations.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

districts: any;
currentDistrict: any;

constructor(private route: ActivatedRoute, private router: Router, private locationsService: LocationsService) { }

ngOnInit() {
  this.getDistricts();
  this.currentDistrict = this.route.queryParams['value'].district;
}

getDistricts(): void {
  this.locationsService.getDistricts().subscribe((res: any) => {
    this.districts = res.sort(sortDistrict);
  }
);
}
buttonClick(name) {
  this.router.navigate(['/restaurants'], { queryParams: { district: name } } );
  this.currentDistrict = name;
  this.locationsService.sendLocation(name);
}
}

function sortDistrict(a, b) {
if (a.name < b.name) {
    return -1;
}
if (a.name > b.name) {
    return 1;
}
return 0;
}

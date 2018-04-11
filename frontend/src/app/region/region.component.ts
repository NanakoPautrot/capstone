import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { RestaurantRegionService } from '../restaurant-region.service';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: any;

  constructor(private route: ActivatedRoute, private router: Router, private RestaurantRegionService: RestaurantRegionService) { }

  ngOnInit() {
    this.getRegion();
  }

  getRegion(): void {
    this.RestaurantRegionService.getRegion()
    .subscribe(res => this.regions =res);
  }

}

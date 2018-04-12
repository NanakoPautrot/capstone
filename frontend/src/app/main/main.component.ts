import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { LocationsService } from '../locations.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

public regions:any;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationsService) { }

  ngOnInit() {
    this.getDistricts();
  }

  getDistricts():void{

    this.locationService.getDistricts()
    .subscribe(res => {
      console.log(res);
      this.regions = res;
    }); 
      
    function removeDuplicates(arr){
      let unique_array = Array.from(new Set(arr))
      return unique_array;
    }
  }
  

}

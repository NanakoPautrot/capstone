import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { RestaurantBoxComponent } from '../restaurant-box/restaurant-box.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { LocationsComponent } from '../locations/locations.component';
import { LocationsService } from '../locations.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

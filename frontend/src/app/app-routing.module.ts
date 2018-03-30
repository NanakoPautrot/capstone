import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { RestaurantBoxComponent } from './restaurant-box/restaurant-box.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'restaurant', component: RestaurantBoxComponent },
];

@NgModule({ 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

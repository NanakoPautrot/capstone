import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { RestaurantBoxComponent } from './restaurant-box/restaurant-box.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from  './sidebar/sidebar.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantBoxComponent },
];

@NgModule({ 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponent = [MainComponent,AboutComponent,RestaurantBoxComponent  ]

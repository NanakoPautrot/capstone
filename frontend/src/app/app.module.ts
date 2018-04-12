import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantBoxComponent } from './restaurant-box/restaurant-box.component';
import { DiscoverBoxComponent } from './discover-box/discover-box.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from  './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { routingComponent } from './app-routing.module';
import { LocationsComponent } from './locations/locations.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import { RestaurantService } from './restaurant.service';

import { LocationsService } from './locations.service';
import { HttpModule } from '@angular/http';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilitiesService } from './facilities.service';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantBoxComponent,
    DiscoverBoxComponent,
    FooterComponent,
    AboutComponent,
    MainComponent,
    SidebarComponent,
    RestaurantsComponent,
    LocationsComponent,
    FacilitiesComponent,
    RestaurantProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMUflkNk54BQQHIOgfCL1QzgZXwG33QkY'
    })
  ],
   
  providers: [
    RestaurantService,
    LocationsService,
    FacilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

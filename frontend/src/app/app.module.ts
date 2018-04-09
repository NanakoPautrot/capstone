import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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

import { RestaurantService } from './restaurant.service';
import { RestaurantRegionService } from './restaurant-region.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpModule } from '@angular/http';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    HttpModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
=======
    HttpModule
>>>>>>> d70ef2c706ce9be4af5d40d69c7654fb6aad7e64
  ],
   
  providers: [
    RestaurantService,
    RestaurantRegionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

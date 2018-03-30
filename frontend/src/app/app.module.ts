import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateTestComponent } from './animate-test/animate-test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantBoxComponent } from './restaurant-box/restaurant-box.component';
import { DiscoverBoxComponent } from './discover-box/discover-box.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './select/select.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimateTestComponent,
    NavbarComponent,
    RestaurantBoxComponent,
    DiscoverBoxComponent,
    FooterComponent,
    SelectComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

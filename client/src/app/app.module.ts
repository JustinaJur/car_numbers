import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarComponent } from './components/pages/car/car.component';

@NgModule({
  declarations: [AppComponent, CarItemComponent, AddCarComponent, CarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

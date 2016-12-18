import {NgModule, Injector} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CityItemDialogComponent } from './city-item/city-item-dialog.component';
import { CityMapComponent } from './city-map/city-map.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';

import mapsReducer from './maps/maps.reducer';
import {ServiceLocator} from "./service-locator.service";

@NgModule({
  imports     : [
    BrowserModule,
    StoreModule.provideStore({
      maps: mapsReducer
    }),
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    CityMapComponent,
    CityItemDialogComponent,
    IndexComponent,
    LoginComponent,
    MapsComponent,
    MapComponent
    // PageNotFoundComponent
  ],
  entryComponents : [
    CityItemDialogComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}

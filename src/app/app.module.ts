import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CityItemFormComponent } from './city-item/city-item-form.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CityMapComponent } from './city-map/city-map.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';

import mapsReducer from './maps/maps.reducer';

@NgModule({
  imports     : [
    BrowserModule,
    StoreModule.provideStore({
      maps: mapsReducer
    }),
    HttpModule,
    FormsModule,
    ModalModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    CityMapComponent,
    CityItemFormComponent,
    IndexComponent,
    LoginComponent,
    MapsComponent
    // PageNotFoundComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CityMapComponent } from './city-map/city-map.component';
import { CityItemFormComponent } from './city-map//city-item-form.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';

import mapsReducer from './maps/maps.reducer';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'city', component: CityMapComponent},
  // { path: 'map/:id', component: MapComponent },
  {path: 'maps', component: MapsComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports     : [
    BrowserModule,
    StoreModule.provideStore({
      maps: mapsReducer
    }),
    HttpModule,
    FormsModule,
    ModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CityMapComponent,
    CityItemFormComponent,
    IndexComponent,
    MapsComponent
    // PageNotFoundComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

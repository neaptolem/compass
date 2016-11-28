import { Routes } from '@angular/router';
import { CityMapComponent } from './city-map/city-map.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';

export const ROUTES: Routes = [
  {path: '', component: IndexComponent},
  {path: 'city', component: CityMapComponent},
  //TODO: { path: 'map/:id', component: MapComponent },
  {path: 'maps', component: MapsComponent},
  //TODO: { path: '**', component: PageNotFoundComponent }
];

export const ROUTES_NAV = [
  {name: 'Home', path: '/'},
  //TODO:  {name: '404', path: '/detail'},
  {name: 'City', path: '/city'},
  {name: 'Maps', path: '/maps'}
];

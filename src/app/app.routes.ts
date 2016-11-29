import { Routes } from '@angular/router';
import { CityMapComponent } from './city-map/city-map.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';

export const ROUTES: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'city', component: CityMapComponent, canActivate: [AuthGuard]},
  //TODO: { path: 'map/:id', component: MapComponent },
  {path: 'maps', component: MapsComponent, canActivate: [AuthGuard]},
  //TODO: { path: '**', component: PageNotFoundComponent }
];

export const ROUTES_NAV = [
  {name: 'Home', path: '/'},
  {name: 'Login', path: '/login'},
  //TODO:  {name: '404', path: '/detail'},
  {name: 'City', path: '/city'},
  {name: 'Maps', path: '/maps'}
];

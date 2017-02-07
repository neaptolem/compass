import { Routes } from '@angular/router';
import { CityMapComponent } from './city-map/city-map.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { MapEditComponent } from './map/map.edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import {MapComponent} from "./map/map.component";

export const ROUTES: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'city', component: CityMapComponent
  // ,canActivate: [AuthGuard]
},
  { path: 'map/edit/:id', component: MapEditComponent },
  { path: 'map/create', component: MapComponent },
  { path: 'map/update/:id', component: MapComponent },
  {path: 'maps', component: MapsComponent
  // , canActivate: [AuthGuard]
},
  //TODO: { path: '**', component: PageNotFoundComponent }
];

export const ROUTES_NAV = [
  {name: 'Home', path: '/'},
  //TODO:  {name: '404', path: '/detail'},
  {name: 'City', path: '/city', useAsDefault:true},
  {name: 'Maps', path: '/maps'}
];

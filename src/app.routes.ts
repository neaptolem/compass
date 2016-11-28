import { Routes } from '@angular/router';
import IndexComponent from './screens/index/index.component';
import MapsComponent from './screens/maps/maps.component';


export const ROUTES: Routes = [
  {path: '', component: IndexComponent},
  {path: 'maps', component: MapsComponent}
];
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { templatePath } from '../../utils';

// interface MapsState {
//   maps: Array<Object>
// }

@Component({
  selector   : 'x-maps',
  templateUrl: templatePath('screens/maps/maps.component.html')
})
export default class MapsComponent {
  // maps: Observable<Array<Object>>;
}

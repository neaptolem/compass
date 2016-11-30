import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { templatePath } from '../../utils';

import { MapService } from '../map/map.service';
import { Map } from '../map/map';

// interface MapsState {
//   maps: Array<Object>
// }

@Component({
  selector   : 'x-map',
  templateUrl: './maps.component.html',
  providers: [ MapService ]
})
export class MapsComponent{

  maps : any;

  constructor(private _mapService : MapService, private _router : Router){

  }

  ngOnInit(){
    this.maps = this._mapService.findAll();
  }

  openMap(map : Map){
    this._router.navigate([`/map/${map.id}`]);
  }

}

import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MapService} from '../map/map.service';
import {Map} from '../map/map';

@Component({
    selector: 'x-map',
    templateUrl: './maps.component.html',
    providers: [MapService]
})
export class MapsComponent {

    maps: Map[];

    constructor(private _mapService: MapService,
                private _router: Router) {

    }

    ngOnInit() {
        this._mapService.findAll()
            .then(maps => {
                this.maps = maps;
            });
    }

    open(map: Map) {
        this._router.navigate([`/map/edit/${map.id}`]);
    }

    update(map: Map){
        this._router.navigate([`/map/update/${map.id}`]);
    }

    delete(map: Map, index: number) {
        this._mapService.delete(map)
            .then(() => {
                this.maps.splice(index, 1);
            })
    }

    add(){
        this._router.navigate([`/map/create`]);
    }

}

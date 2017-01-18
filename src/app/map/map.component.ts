import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {MapService} from '../map/map.service';
import {Map} from  './map';
import {ActivatedRoute, Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {CityItemService} from "../city-item/city-item.service";
import {CityItem} from "../city-item/city-item";

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    providers: [MapService, CityItemService]
})
export class MapComponent implements OnInit, OnDestroy {

    map: Map = new Map({});
    cityItems: CityItem[];
    floor: string = "Floor";

    private sub: any;

    constructor(private _http: Http, private _cityItemService: CityItemService, private _mapService: MapService, private route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._cityItemService.findAll()
                .then(items => this.cityItems = items)
                .then(() => {
                    if (params['id']) {
                        this._mapService.findOne(params['id'])
                            .then(map => {
                                this.map = map;
                                this.cityItems.forEach((ci: CityItem) => {
                                    if (ci.id === map.cityItem.id) {
                                        this.map.cityItem = ci;
                                    }
                                })
                            });
                    }
                })
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save(): void {
        let p: Promise<Response>;
        if (this.map.id) {
            p = this._mapService.update(this.map);
        } else {
            p = this._mapService.create(this.map);
        }
        p.then(() => {
            this._router.navigate([`/maps`]);
        });
    }

    delete(): void {
        this._mapService.delete(this.map)
            .then(() => {
                this._router.navigate([`/maps`]);
            })

    }


}

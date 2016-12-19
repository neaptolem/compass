import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {MapItem} from "./map-item";
import {MapItemService} from "./map-item.service";

@Component({
    selector: 'map-item',
    templateUrl: './map-item.component.html',
    providers: [MapItemService]
})
export class MapItemComponent {

    @Input()
    mapItem: MapItem = new MapItem({});
    name: string = "Name";

    constructor(private _http: Http, private _mapItemService: MapItemService, private route: ActivatedRoute, private _router: Router) {

    }

    save(): void {
        let p: Promise<Response>;
        if (this.mapItem.id) {
            p = this._mapItemService.create(this.mapItem);
        } else {
            p = this._mapItemService.update(this.mapItem);
        }
        p.then(() => {

        });
    }

    delete(): void {
        this._mapItemService.delete(this.mapItem)
            .then(() => {

            })

    }


}

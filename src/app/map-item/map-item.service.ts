import { Injectable } from '@angular/core';
import { MapItem } from './map-item';
import {Service} from "../common/service.service";

@Injectable()
export class MapItemService extends Service<MapItem> {

    getInstance(o: any): MapItem {
        return new MapItem(o);
    }

    prefix(): string {
        return '/mapItem';
    }

}

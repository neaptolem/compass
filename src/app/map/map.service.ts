import { Injectable } from '@angular/core';
import { Map } from './map';
import {Service} from "../common/service.service";
import {config} from "../config";

@Injectable()
export class MapService extends Service<Map>{

    getInstance(o: any): Map {
        return new Map(o);
    }

    prefix() {
        return '/map';
    }

    url(map: Map){
        return config.endpoint + `/resources/maps/${map.id}.svg`;
    }

}

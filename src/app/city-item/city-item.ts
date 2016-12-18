import {Entity} from '../common/entity';

export class CityItem extends Entity {
    name: string;
    longitude: number;
    latitude: number;
    placeId?: string;
    marker?: any; // google marker

    constructor(options: any) {
        super(options);
        this.name = options.name;
        this.longitude = options.longitude;
        this.latitude = options.latitude;
        this.placeId = options.placeId;
        this.marker = options.marker;
    }

}

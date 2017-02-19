import {Entity} from "../common/model/entity";
export class MapItem {

    id?: string;
    name: string;
    map: Entity;

    constructor(options: any) {
        this.id = options.id;
        this.name = options.name;
        this.map = new Entity(options.map);
    }

}

import {Entity} from "../common/entity";
export class Map {

  id?: string;
  floor: number;
  url?: string;
  cityItem: Entity;

  constructor(options: any){
    this.id = options.id;
    this.floor = options.floor;
    this.url = options.url;
    this.cityItem = new Entity(options.cityItem);
  }

}

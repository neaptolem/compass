import {Entity} from "../common/entity";
export class Map {

  id?: string;
  floor: number;
  image?: any;
  owner: Entity;

  constructor(options: any){
    this.id = options.id;
    this.floor = options.floor;
    this.image = options.image;
    this.owner = new Entity(options.owner);
  }

}

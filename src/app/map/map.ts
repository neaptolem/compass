export class Map {

  id?: string;
  floor: number;
  url?: string;

  constructor(options: any){
    this.id = options.id;
    this.floor = options.floor;
    this.url = options.url;
  }

}

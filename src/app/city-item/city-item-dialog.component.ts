import { Component, Input, ViewChild } from '@angular/core';
import { CityItem } from './city-item';
import { CityItemService } from './city-item.service';
import { Response } from '@angular/http';

@Component({
  selector   : 'city-item-dialog',
  templateUrl: './city-item-dialog.component.html'
})
export class CityItemDialogComponent {

  placeholder = 'Name';

  @Input()
  model : CityItem;

  deleted : any;

  constructor(private _cityItemService : CityItemService) { }

  save() {
    let p: Promise<Response>;
    let marker = this.model.marker;
    this.model.marker = undefined;

    if (this.model.id) {
      p = this._cityItemService.update(this.model);
    }
    else {
      p = this._cityItemService.create(this.model);
    }
    p.then(() => {
      this.model.marker = marker;
    });
  }

  delete() {
    if (this.model.id){
      this._cityItemService.delete(this.model).then(() => {
        this.model.marker.setMap(null);
      });
    } else {
      this.model.marker.setMap(null);
    }
  }

}

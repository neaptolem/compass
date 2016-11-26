import { Component, Input, ViewChild} from '@angular/core';
import { CityItem } from './city-item';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { CityItemService } from './city-item.service';
import { Response } from '@angular/http';

@Component({
    selector: 'city-item-form',
    templateUrl: './city-item-form.component.html',
    exportAs: 'cityItemDialog'
})
export class CityItemFormComponent {

    @ViewChild('childModal') public childModal: ModalDirective;

    @Input()
    model: CityItem;

    constructor(private _cityItemService : CityItemService){

    }

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideModal() : void {
      this.childModal.hide();
    }

    save(){
      let p : Promise<Response>;
      let marker = this.model.marker;
      this.model.marker = undefined;

      if (this.model.id){
        p = this._cityItemService.update(this.model);
      } else {
        p = this._cityItemService.create(this.model);
      }
      p.then(() => {
        this.model.marker = marker;
        this.hideModal();
      });
    }

    delete(){
      this._cityItemService.delete(this.model).
      then(() => {
        this.model.marker.setMap(null);
        this.hideModal();
      });
    }

}

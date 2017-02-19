import {Component, OnInit, ViewChild}       from '@angular/core';
import {QuestionService} from '../dynamic-form/dynamic-form.service';
import {MapService} from '../api/service/map.service';
import {ServiceFactory} from "../api/service-factory.service";

@Component({
    selector: 'my-app',
    template: `
    <div>
      <dynamic-form #mapForm
        [service]="mapService">
      </dynamic-form>
    </div>
  `
})
export class IndexComponent {

    questions: any[];
    item: any = {
        firstName: "name"
    };

    @ViewChild('mapForm') mapForm : any;

    constructor(private mapService : MapService,
                private serviceFactory: ServiceFactory) {
        serviceFactory.getService(9).findAll().then(console.log);
    }

    clicked(){
        this.mapForm.render(this.item);
    }

}

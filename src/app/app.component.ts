import { Component, ViewContainerRef } from '@angular/core';
import '../../public/css/styles.css';
import { CityMapComponent } from './city-map.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }

}

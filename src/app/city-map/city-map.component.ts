import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { InfoWindow } from './info-window';
import { GeoCoder } from './geo-coder';
import { CityItem } from '../city-item/city-item';
import { CityItemService } from '../city-item/city-item.service';
import { CityItemFormComponent } from '../city-item/city-item-form.component';

declare var google: any;

@Component({
  selector : 'city-map',
  template : ` <div id="map"></div>
                <city-item-form #cityItemForm="cityItemDialog"
                [model]="current.model"></city-item-form>
              `,
  styles   : [
    '#map { height: 500px }'
  ],
  providers: [
    CityItemService
  ]
})
export class CityMapComponent implements OnInit {

  map: any; // google map
  infoWindow: InfoWindow;
  geoCoder: GeoCoder;
  current: any = {
    model: new CityItem()
  };
  @ViewChild('cityItemForm') public cityItemForm: any;


  constructor(
    private _cityItemService: CityItemService,
    private _zone: NgZone) {

  }

  ngOnInit() {
    let that = this;
    let lviv = {
      lat: 49.840,
      lng: 24.0157
    };
    this.map = new google.maps.Map(document.getElementById("map"), {
      center                : lviv,
      zoom                  : 14,
      disableDoubleClickZoom: true
    });
    this.infoWindow = new InfoWindow({
      map: this.map
    });
    this.geoCoder = new GeoCoder();

    google.maps.event.addListener(this.map, 'click', function (event: any) {
      that.infoWindow.hide();
    });
    google.maps.event.addListener(this.map, 'dblclick', function (event: any) {
      that.infoWindow.hide();
      let cityItem : any = {
        name     : '',
        latitude : event.latLng.lat(),
        longitude: event.latLng.lng()
      };
      let marker = that.placeMarker(cityItem);
      that._zone.run(() => {
        that.current.model = marker.cityItem;
        that.cityItemForm.showChildModal();
      });
    });

    this._cityItemService.findAll()
      .then(data => {
        for (let cityItem of data) {
          that.placeMarker(cityItem);
        }
      })
  }

  placeMarker(cityItem: CityItem) {
    let that = this;
    let marker = new google.maps.Marker({
      position : new google.maps.LatLng(
        cityItem.latitude,
        cityItem.longitude
      ),
      draggable: true,
      map      : that.map,
      animation: google.maps.Animation.DROP,
      timeout  : 100,
      //icon: app.iconByTypeId[buildingView.model.get('type').id]
    });
    marker.cityItem = cityItem;
    cityItem.marker = marker;

    google.maps.event.addListener(marker, 'click', () => {
      that.infoWindow.show(marker);
    });
    google.maps.event.addListener(marker, 'dblclick', () => {
      that._zone.run(() => {
        that.infoWindow.hide();
        that.current.model = marker.cityItem;
        that.cityItemForm.showChildModal();
      });
    });
    google.maps.event.addListener(marker, 'dragstart', () => {
      that.infoWindow.hide();
      marker.animation = google.maps.Animation.BOUNCE;
    });
    google.maps.event.addListener(marker, 'dragend', () => {
      marker.setAnimation(null);
      marker.cityItem.latitude = marker.position.lat();
      marker.cityItem.longitude = marker.position.lng();

      that.geoCoder.geocode(marker)
        .then((r) => {
          console.log(r);
        });
      that.infoWindow.show(marker);
    });
    return marker;
  }

}

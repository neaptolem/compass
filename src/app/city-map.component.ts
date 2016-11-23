import { Component, OnInit } from '@angular/core';
import { InfoWindow } from './info-window';
import { GeoCoder } from './geo-coder';
import { CityItem } from './city-item';
import { CityItemService } from './city-item.service';

declare var google: any;

@Component({
    selector: 'city-map',
    template: '<div id="map"></div>',
    styles: [
        '#map { height: 300px }'
    ],
    providers: [
      CityItemService
    ]
})
export class CityMapComponent implements OnInit {

    map : any; // google map
    infoWindow: InfoWindow;
    geoCoder: GeoCoder;

    constructor(private _cityItemService : CityItemService){
      
    }

    ngOnInit() {
        let that = this;
        let lviv = {
            lat: 49.840,
            lng: 24.0157
        };
        this.map = new google.maps.Map(document.getElementById("map"), {
            center: lviv,
            zoom: 14,
            disableDoubleClickZoom: true
        });
        this.infoWindow = new InfoWindow({
            map: this.map
        });
        this.geoCoder = new GeoCoder();

        google.maps.event.addListener(this.map, 'click', function(event: any) {
            that.infoWindow.hide();
        });
        google.maps.event.addListener(this.map, 'dblclick', function(event: any) {
            that.infoWindow.hide();
            let cityItem = {
              name : '',
              latitude : event.latLng.lat(),
              longitude : event.latLng.lng()
            };
            that.placeMarker(cityItem);
        });

        this._cityItemService.findAll()
        .subscribe(r => {
          console.log(r);
        })
    }

    placeMarker(cityItem : CityItem){
      let that = this;
      let marker = new google.maps.Marker({
          position: new google.maps.LatLng(
              cityItem.latitude,
              cityItem.longitude
          ),
          draggable: true,
          map: that.map,
          animation: google.maps.Animation.DROP,
          timeout: 100,
          //icon: app.iconByTypeId[buildingView.model.get('type').id]
      });
      marker.cityItem = cityItem;
      cityItem.marker = marker;

      google.maps.event.addListener(marker, 'click', () => {
          that.infoWindow.show(marker);
      });
      google.maps.event.addListener(marker, 'dblclick', () => {
          //buildingView.edit();
      });
      google.maps.event.addListener(marker, 'dragstart', () => {
          that.infoWindow.hide();
          marker.animation = google.maps.Animation.BOUNCE;
      });
      google.maps.event.addListener(marker, 'dragend', () => {
          marker.setAnimation(null);
          that.geoCoder.geocode(marker)
          .then((r) => {
            console.log(r);
            console.log(marker.cityItem);
          });
          that.infoWindow.show(marker);
      });
    }

}

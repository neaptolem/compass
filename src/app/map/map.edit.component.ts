import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {MapService} from '../map/map.service';
import {Map} from  './map';
import {Routes, ActivatedRoute} from '@angular/router';
import {Http, Response} from '@angular/http';
import * as d3 from 'd3';
import {debuglog} from "util";
import {MapItem} from "../map-item/map-item";
import {MapItemService} from "../map-item/map-item.service";

@Component({
    selector: 'map',
    template: `Map: #
        {{map?.id}}  {{status}}
        <div id="map" style="height: 500px; border: 1px solid black"></div>
        <map-item [mapItem]="currentItem"></map-item>
      `,
    providers: [MapService]
})
export class MapEditComponent implements OnInit, OnDestroy {

    @Input()
    map: Map;

    status: string = "Loading ...";
    currentItem : MapItem = new MapItem({});

    private sub: any;
    private mapItemRadius = 8;
    private mapItems: MapItem[];
    private svg: any;

    constructor(private _http: Http,
                private _mapService: MapService,
                private _mapItemService: MapItemService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let p1 = this._mapService.findOne(params['id'])
                .then(map => {
                    this.map = map;
                })

            // let p2 = this._mapItemService;


                    this.initMap();
                // })
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    initMap() {
        let that = this;
        this.svg = d3.select("#map")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .call(d3.zoom().on("zoom", function () {
                let transform = d3.event.transform;
                that.svg.attr("transform", 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
                d3.selectAll('.map-item').attr('r', that.mapItemRadius / transform.k);
            }))
            .append("g");

        d3.xml(this._mapService.url(this.map),
            function (error, documentFragment) {
                if (error) {
                    console.log(error);
                    return;
                }
                var svgNode = documentFragment
                    .getElementsByTagName("svg")[0];
                let node: any = that.svg.node();
                node.appendChild(svgNode);
                that.initMapItems();
                that.status = "OK";
            });
    }

    initMapItems() {
        let that = this;
        this.svg.selectAll(".map-item")
            .data(this.mapItems)
            .enter().append("circle")
            .on("click", function (i : any) {
                that.currentItem = i;
            })
            .attr("class", "map-item")
            .attr("cx", function (d: any) {
                return d.x;
            })
            .attr("cy", function (d: any) {
                return d.y;
            })
            .attr("r", this.mapItemRadius)
            .style("fill", 'orange')
            .style("cursor", "move")
            .call(d3.drag()
                .on("start", function () {
                    d3.select(this).raise().classed("active", true);
                })
                .on("drag", function (d: any) {
                    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
                })
                .on("end", function () {
                    d3.select(this).classed("active", false);
                }));
    }


}

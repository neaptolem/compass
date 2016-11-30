import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { MapService } from '../map/map.service';
import { Map } from  './map';
import { Routes, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import * as d3 from 'd3';
import {debuglog} from "util";

@Component({
    selector: 'map',
    templateUrl: `Map: #
    {{map?.id}}  {{status}}
    <div id="map" style="height: 500px; border: 1px solid black">
    

    </div>
  `,
    providers: [MapService]
})
export class MapComponent implements OnInit, OnDestroy {

    @Input()
    map: Map;

    status : string = "Loading ...";

    private sub: any;

    constructor(private _http : Http, private _mapService: MapService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.map = this._mapService.findOne(params['id']);
            this.initD3();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    initD3(){
        let that = this;
        var svg = d3.select("#map")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .call(d3.zoom().on("zoom", function () {
                let transform = d3.event.transform;
                svg.attr("transform", 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
            }))
            .append("g");

            svg.append("rect");

        d3.xml(this.map.url,
            function(error, documentFragment) {
                if (error) {console.log(error); return;}
                var svgNode = documentFragment
                    .getElementsByTagName("svg")[0];
                let node : any= svg.node();
                node.appendChild(svgNode);
                that.status = "OK";
            });

    }


}

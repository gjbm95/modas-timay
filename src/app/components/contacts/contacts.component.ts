import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/Source';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public map!: Map;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      layers:[ new TileLayer(
      {source: new OSM(),}
      ),
      ],
      target: "map",
      view: new View({
        center:  [1168493.0987877916, 10.497837180462023],
        projection: 'EPSG:4326',
        zoom: 18.50, 
        maxZoom:100
    }),
      
  });

  
  /*let thismap = this.map;
  this.map.on('click', function(evt){
    var newZoom = thismap.getView().getZoom();
    console.log("Zoom: "+newZoom);
    console.log(thismap.getView().getCenter());
  });*/
  }


}

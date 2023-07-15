import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/Source';
import TileLayer from 'ol/layer/Tile';
import {transform} from 'ol/proj';

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
        center: transform([10.4978811,-66.9010005],'EPSG:4326','EPSG:3857') ,
        zoom: 30, maxZoom:100
    }),
      
  });

  this.map.on('click', function(evt){
    console.log(evt);
  });
  }


}

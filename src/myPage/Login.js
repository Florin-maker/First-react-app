import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/green.png';
import leafRed from './assets/red.png';
import leafOrange from './assets/orange.png';


class App extends Component {

  state = {
    greenIcon: {
      lat: 45.2218,
      lng: 106.8426,
    },
    redIcon: {
      lat: -0.5177,
      lng: -56.4659,
    },
    orangeIcon: {
      lat: 37.0723,
      lng: 32.2531,
    },
    zoom: 3
  }

  greenIcon = L.icon({
    iconUrl: leafGreen,
    iconSize:     [20, 40],
    iconAnchor:   [20, 40]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    iconSize:     [20, 40],
    iconAnchor:   [20, 40]
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    iconSize:     [20, 40],
    iconAnchor:   [20, 40] 
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    return (
      <Map className="map" center={positionOrangeIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
          <Popup>
          Latitude: 37.0723, Longitude: 32.2531,
          </Popup>
        </Marker>
        <Marker position={positionGreenIcon} icon={this.greenIcon}>
          <Popup>
          Latitude: 45.2218, Longitude: 106.8426,
          </Popup>
        </Marker>
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>
          Latitude: -0.5177, Longitude: -56.4659,
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
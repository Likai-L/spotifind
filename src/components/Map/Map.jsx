'use client';
import 'leaflet/dist/leaflet.css';
//--import to be able to use a pin 
import 'leaflet-defaulticon-compatibility' ;
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
//Marker and popup are for the pin, TileLayer is for creditting leaflet, MapContainer is main function
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from '../../styles/Home.module.css';

function Map() {
  const position = [49.28594, -123.11129];
  const position2 = [49.28519, -123.11186];
  return (
    <MapContainer className={style.map} center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup >
          marker<br/>
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup >
          marker<br/>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
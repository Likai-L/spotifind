'use client';

import 'leaflet/dist/leaflet.css';
// --import to be able to use a pin
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// Marker and popup are for the pin, TileLayer is for crediting leaflet, MapContainer is main function
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map() {
  const position = [49.28594, -123.11129];
  const position2 = [49.28519, -123.11186];
  return (
    <MapContainer
      center={position}
      className="w-1/2 h-2/4"
      scrollWheelZoom
      zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          marker
          <br />
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>
          marker
          <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

'use client';

import 'leaflet/dist/leaflet.css';
// --import to be able to use a pin
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// Marker and popup are for the pin, TileLayer is for crediting leaflet, MapContainer is main function
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useGlobalContext } from 'app/(context)';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FINDUSERSBYSONG } from 'public/constants/pathNames';

function Map() {
  const { displayTrack } = useGlobalContext();
  const [users, setUsers] = useState('');
  // const { uri } = track;
  useEffect(() => {
    axios
      .post(FINDUSERSBYSONG, {
        currentSongUri: displayTrack.uri
      })
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  // latitude: 49.868556 longitude: -97.1713925

  if (users.length > 0) {
    const centerLat = users[0].latitude;
    const centerLong = users[0].longitude;
    const center = [Number(centerLat), Number(centerLong)];
    const userMarkers = users.map(userMarker => (
      <Marker
        // turn string lat and long back into Number by calling Number()
        position={[Number(userMarker.latitude), Number(userMarker.longitude)]}>
        <Popup>
          marker
          <br />
        </Popup>
      </Marker>
    ));

    return (
      <div className="min-h-[30vh] min-w-[30vw] w-2/4 h-2/3">
        <MapContainer
          center={center}
          className="h-full w-full mx-5"
          scrollWheelZoom
          zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {userMarkers}
        </MapContainer>
      </div>
    );
  }
}

export default Map;

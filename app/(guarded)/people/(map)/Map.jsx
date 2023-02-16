'use client';

import 'leaflet/dist/leaflet.css';
// --import to be able to use a pin
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// Marker and popup are for the pin, TileLayer is for crediting leaflet, MapContainer is main function
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useGlobalContext } from 'app/(context)';

function Map(props) {
  const { latitude, longitude, profile } = useGlobalContext();
  const { users } = props;
  console.log('props from inside map component', props);
  console.log('users.length', users.length);

  if (users.length > 0) {
    // Center over NA, otherwise [0,0] for world.
    const center = [50.309515, -102.754972];
    // const currentUserLat = currentUser[0].latitude;
    const userMarkers = users.map(userMarker => (
      <Marker
        // turn string lat and long back into Number by calling Number()
        position={[Number(userMarker.latitude), Number(userMarker.longitude)]}>
        <Popup>
          {userMarker.username}
          <br />
        </Popup>
      </Marker>
    ));
    return (
      <div className="min-h-[30vh] min-w-[30vw] w-2/4 h-[80%] ml-2 mr-4">
        <MapContainer
          center={center}
          className="h-full w-full mx-5"
          scrollWheelZoom
          zoom={3}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {latitude ? (
            <Marker position={[latitude, longitude]}>
              <Popup>
                {profile.name}
                <br />
              </Popup>
            </Marker>
          ) : null}
          {userMarkers}
        </MapContainer>
      </div>
    );
  }
}

export default Map;

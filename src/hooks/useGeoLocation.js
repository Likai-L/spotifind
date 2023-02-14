import { useGlobalContext } from 'app/(context)';
import { LOCATION } from 'public/constants/pathNames';
import axios from 'axios';
import { useEffect } from 'react';

export default function useGeoLocation() {
  const { latitude, setLatitude, longitude, setLongitude, profile } =
    useGlobalContext();

  navigator.geolocation.getCurrentPosition(position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  console.log('latitude:', latitude, 'longitude:', longitude);

  useEffect(() => {
    if (
      !latitude.toString().length > 0 ||
      !longitude.toString().length > 0 ||
      !profile.uri
    ) {
      return;
    }
    axios
      .post(LOCATION, {
        spotifyUserUri: profile.uri,
        username: profile.name,
        latitude: latitude.toString(),
        longitude: longitude.toString()
      })
      .then(() => console.log('Geolocation updating in database...'))
      .catch(e =>
        console.log('Error when updating geolocation to database', e)
      );
  }, [longitude, latitude, profile.uri]);
}

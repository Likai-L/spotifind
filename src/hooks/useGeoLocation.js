import { useGlobalContext } from 'app/(context)';

export default function useGeoLocation() {
  const { latitude, setLatitude, longitude, setLongitude } = useGlobalContext();

  navigator.geolocation.getCurrentPosition(position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  console.log('latitude:', latitude, 'longitude:', longitude);
}

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';

export default function useAuth() {
  const searchParams = useSearchParams();
  const { setAccessToken, refreshToken, setRefreshToken, setExpiresIn } =
    useGlobalContext();
  useEffect(() => {
    // since three query strings come together just check for one
    if (searchParams.get('access_token')) {
      setAccessToken(searchParams.get('access_token'));
      setRefreshToken(searchParams.get('refresh_token'));
      setExpiresIn(searchParams.get('expires_in'));
    }
  }, []);

  // when refresh token changes, set an interval of 55 minutues to the refresh access token
  useEffect(() => {
    const refresh = setInterval(() => {
      axios(`/api/refresh_token/?refresh_token=${refreshToken}`)
        .then(res => setAccessToken(res.data.access_token))
        .catch(err => console.log(err));
    }, 3300000); // to test, change this to, eg, 10000
    return () => clearInterval(refresh);
  }, [refreshToken]);
}

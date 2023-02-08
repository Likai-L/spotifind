import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';

export default function useAuth() {
  const searchParams = useSearchParams();
  const { credentials, setCredentials } = useGlobalContext();
  useEffect(() => {
    // since three query strings come together just check for one
    if (searchParams.get('access_token')) {
      setCredentials({
        accessToken: searchParams.get('access_token'),
        refreshToken: searchParams.get('refresh_token'),
        expiresIn: searchParams.get('expires_in')
      });
    }
  }, []);

  // when refresh token changes, set an interval of 55 minutues to the refresh access token
  useEffect(() => {
    const refresh = setInterval(() => {
      if (credentials.refreshToken) {
        axios(`/api/refresh_token/?refresh_token=${credentials.refreshToken}`)
          .then(res => {
            setCredentials({
              ...credentials,
              accessToken: res.data.access_token
            });
          })
          .catch(err => console.log(err));
      }
    }, 3300000); // to test, change this to, eg, 10000
    return () => clearInterval(refresh);
  }, [credentials.refreshToken]);
}

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from './(button)/Button';
import SpotifyIcon from './(nav)/(icons)/SpotifyIcon';
import axios from 'axios';

export default function Home() {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const searchParams = useSearchParams();
  useEffect(() => {
    // since three query strings come together just check for one
    if (searchParams.get('access_token')) {
      console.log('SETTING STATES');
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

  const loginButtonContent = () => {
    return (
      <span className="flex items-center">
        Login With <SpotifyIcon className="mx-1" /> Spotify
      </span>
    );
  };

  return (
    <div className="text-green-500">
      I am Home (AKA Now Playing)
      <br />
      <br />
      <div>
        <Button
          content={loginButtonContent()}
          path="/api/login"
          target="_blank"
        />
      </div>
    </div>
  );
}

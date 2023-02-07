'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from './(button)/Button';
import SpotifyIcon from './(nav)/(icons)/SpotifyIcon';

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

  const loginButtonContent = () => {
    return (
      <span className="flex items-center">
        Login With <SpotifyIcon /> Spotify
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

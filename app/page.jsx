'use client';

import { useSearchParams } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import Button from './(button)/Button';
import SpotifyIcon from './(nav)/(icons)/SpotifyIcon';

export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const scope =
    'user-read-private user-read-email user-read-currently-playing user-top-read user-read-recently-played playlist-read-private';

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope
    .split(' ')
    .join('%20')}&response_type=code&show_dialog=true`;
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');
  useAuth(authCode);

  const loginButtonContent = () => {
    return (
      <span className="flex items-center">
        Login With <SpotifyIcon /> Spotify
      </span>
    );
  };

  return (
    <div className="text-white-500">
      I am Home (AKA Now Playing)
      <br />
      <br />
      <div>
        {authCode ? (
          <h3>{authCode}</h3>
        ) : (
          <Button
            content={loginButtonContent()}
            path={authUrl}
            target="_blank"
          />
        )}
      </div>
    </div>
  );
}

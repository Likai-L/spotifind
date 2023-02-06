'use client';

import { useSearchParams } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
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
  return (
    <div className="text-white-500">
      I am Home (AKA Now Playing)
      <a href={authUrl}>Login with Spotify</a>
      {authCode && <h2>{authCode}</h2>}
    </div>
  );
}

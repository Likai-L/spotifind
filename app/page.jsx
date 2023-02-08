'use client';

import Button from './(button)/Button';
import SpotifyIcon from './(nav)/(icons)/SpotifyIcon';
import useAuth from '@/hooks/useAuth';

export default function Home() {
  useAuth();
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

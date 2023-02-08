'use client';

import LoginButton from './(button)/LoginButton';
import useAuth from '../src/hooks/useAuth';

export default function Home() {
  useAuth();

  return (
    <div className="text-green-500">
      I am Home (AKA Now Playing)
      <br />
      <br />
      <div>
        <LoginButton />
      </div>
    </div>
  );
}

'use client';

import LoginButton from 'app/(button)/LoginButton';
import useAuth from '@/hooks/useAuth';
import PeopleListening from 'app/(illustrations)/PeopleListening';
import Phone from 'app/(illustrations)/Phone';
import PeoplePlaying from 'app/(illustrations)/PeoplePlaying';
import PeopleDancing from 'app/(illustrations)/PeopleDancing';

export default function Home() {
  useAuth();

  return (
    <div className="bg-landing min-h-screen">
      <div className="flex flex-row justify-around">
        <div>
          <LoginButton />
        </div>

        <PeopleListening />
      </div>
      <div className="flex flex-row">
        <Phone />
        <PeoplePlaying />
        <PeopleDancing />
      </div>
    </div>
  );
}

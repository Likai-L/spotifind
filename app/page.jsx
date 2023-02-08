'use client';

import Image from 'next/image';
import LoginButton from 'app/(button)/LoginButton';
import useAuth from '@/hooks/useAuth';
import PeopleListening from 'app/(illustrations)/PeopleListening';
import Phone from 'app/(illustrations)/Phone';
import PeoplePlaying from 'app/(illustrations)/PeoplePlaying';
import PeopleDancing from 'app/(illustrations)/PeopleDancing';
import logo from '../public/images/logo.png';

export default function Home() {
  useAuth();

  return (
    <div className="bg-landing min-h-screen font-primary">
      <div className="flex flex-row justify-around">
        <div>
          <div className="text-center text-white text-5xl font-bold">
            <p>Find Your Music Soul Mates</p>
            <div>
              <span>With</span>
              <Image
                alt="Spotifind logo"
                src={logo}
                className="inline-block w-20"
              />
              <span>SpotiFind</span>
            </div>
          </div>
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

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
      <div className="flex flex-row justify-center">
        <div className="mr-24">
          <div className="text-center text-white text-5xl font-bold mt-40">
            <p>Find Your Music Soul Mates</p>
            <div className="mt-6">
              <span>With</span>
              <Image
                alt="Spotifind logo"
                className="inline-block w-20 ml-2"
                src={logo}
              />
              <span>SpotiFind</span>
            </div>
          </div>
          <div className="mt-8 flex  justify-center">
            <LoginButton />
          </div>
        </div>
        <PeopleListening />
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="text-center text-white text-2xl font-bold">
          <Phone />
          <p>Share your thoughts</p>
        </div>
        <div className="text-center text-white text-2xl font-bold">
          <PeoplePlaying />
          <p>Find your people</p>
        </div>
        <div className="text-center text-white text-2xl font-bold">
          <PeopleDancing />
          <p>Enjoy music together</p>
        </div>
      </div>
    </div>
  );
}

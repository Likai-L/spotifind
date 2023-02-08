'use client';

import Image from 'next/image';
import LoginButton from 'app/(button)/LoginButton';
import PeopleListening from 'app/(illustrations)/PeopleListening';
import Phone from 'app/(illustrations)/Phone';
import PeoplePlaying from 'app/(illustrations)/PeoplePlaying';
import PeopleDancing from 'app/(illustrations)/PeopleDancing';
import logo from '../public/images/logo.png';

export default function Landing() {
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
        <div className="text-center text-white text-2xl font-bold w-80">
          <Phone />
          <p className="mt-6">Share your thoughts</p>
          <p className="mt-6 text-lg font-light text-left">
            Find your favorite songs, share your insights and feelings in the
            comment sections!
          </p>
        </div>
        <div className="text-center text-white text-2xl font-bold w-80">
          <PeoplePlaying />
          <p className="mt-6">Find your people</p>
          <p className="mt-6 text-lg font-light text-left">
            Find people around you who are also interested in your favorite
            songs.{' '}
          </p>
        </div>
        <div className="text-center text-white text-2xl font-bold w-80">
          <PeopleDancing />
          <p className="mt-12">Enjoy music together</p>
          <p className="mt-6 text-lg font-light text-left">
            Message people, meet up and listen together!
          </p>
        </div>
      </div>
    </div>
  );
}

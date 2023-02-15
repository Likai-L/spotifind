/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import LoginButton from 'app/(button)/LoginButton';
import PeopleListening from 'app/(illustrations)/PeopleListening';
import Phone from 'app/(illustrations)/Phone';
import PeoplePlaying from 'app/(illustrations)/PeoplePlaying';
import PeopleDancing from 'app/(illustrations)/PeopleDancing';
import logo from '../public/images/logo.png';

export default function Landing() {
  return (
    <div className="bg-landing h-screen overflow-hidden">
      <div className="flex flex-row justify-center">
        <div className="mr-24">
          <div className="text-center text-white text-5xl font-bold mt-32 font-title">
            <p>Find Your Music Soul Mates</p>
            <div className="mt-6">
              <span>With</span>
              <Image
                alt="Spotifind logo"
                className="inline-block w-20 mx-2"
                src={logo}
              />
              <span className="font-primary">SpotiFind</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <LoginButton />
          </div>
        </div>
        <PeopleListening />
      </div>
      <div className="flex justify-evenly">
        <div className="text-center text-white text-2xl font-bold w-80">
          <Phone />
          <p className="mt-4 font-title">Find Your People</p>
          <p className="mt-4 text-lg font-light font-primary">
            Connect with others in your area who are interested in your
            favourite songs!
          </p>
        </div>
        <div className="text-center text-white text-2xl font-bold w-80">
          <PeoplePlaying />
          <p className="mt-4 font-title">Discuss Your Music</p>
          <p className="mt-4 text-lg font-light font-primary">
            Share your thoughts and insight into the music you listen to!
          </p>
        </div>
        <div className="text-center text-white text-2xl font-bold w-80">
          <PeopleDancing />
          <p className="mt-8 font-title">Discover Your Niche</p>
          <p className="mt-4 text-lg font-light font-primary">
            Get new music recommendations based off what you're listening to and
            see what others are saying about it!
          </p>
        </div>
      </div>
    </div>
  );
}

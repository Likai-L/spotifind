'use client';

import Map from 'app/(map)/Map';
import { useState } from 'react';
import Image from 'next/image';
import UserCard from './UserCard';

export default function People() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden">
      <h1 className="text-[1.5vw] font-primary font-semibold ml-10 cursor-default">
        Find people interested in:
      </h1>
      <div className="flex m-auto w-4/5 h-1/5 rounded-3xl bg-secondary">
        <div className="sticky max-w-1/5 max-h-4/5 aspect-square m-1">
          <Image
            alt="cute cat"
            className="rounded-lg block m-auto"
            fill
            src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="my-2 ml-10 text-3xl">Cat Song</h1>
          <h1 className="my-2 ml-10 text-3xl">Mittens</h1>
          <h1 className="my-2 ml-10 text-3xl">Mrrreowww</h1>
        </div>
      </div>
      <footer className="container m-auto bg-secondary w-4/5 h-3/5 max-h-max rounded-3xl">
        <div className="flex flex-row">
          <h1 className="text-[1.5vw] p-5 cursor-default">x user/s found </h1>
          <button
            className="ml-[17vw]"
            onClick={() => setShowMap(!showMap)}
            type="submit">
            <h2 className="text-[1.5vw]">View On Map</h2>
          </button>
        </div>
        <div className="flex flex-row h-3/4 w-full overflow-x-auto overflow-y-clip items-center">
          {showMap ? <Map /> : null}
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </footer>
    </div>
  );
}

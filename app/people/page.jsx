'use client';

// import Map from 'app/(map)/Map';
// import { useState } from 'react';
import Image from 'next/image';
import UserCard from './UserCard';

export default function People() {
  // const [showMap, setShowMap] = useState(false);
  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden">
      <h1 className="text-[1.5vw] font-primary font-semibold ml-10 cursor-default">
        Find people interested in:
      </h1>
      <div className="container m-auto w-4/5 h-1/5 rounded-3xl bg-secondary">
        <div>
          <Image
            alt="cute cat"
            className="rounded-lg block m-auto"
            height="175"
            src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
            width="175"
          />
        </div>
      </div>
      <footer className="container m-auto bg-secondary w-4/5 h-3/5 max-h-max rounded-3xl">
        <h1 className="text-[1.5vw] p-5 cursor-default">x user/s found</h1>
        <div className="flex flex-row h-3/4 w-full overflow-x-auto items-center">
          <UserCard />
          <UserCard />
        </div>
        {/* {showMap ? <Map /> : null} */}
      </footer>
    </div>
  );
}

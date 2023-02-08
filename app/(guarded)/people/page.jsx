'use client';

import SearchBar from 'app/(searchbar)/SearchBar';
import Map from 'app/(map)/Map';
import { useState } from 'react';
import UserCard from './UserCard';
import SongCard from './SongCard';

export default function People() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden text-primary font-primary">
      <h1 className="text-[1.5vw] font-primary font-semibold ml-10 cursor-default">
        Find people with similar taste
        <SearchBar action="/people" label="Search for a user" />
      </h1>
      <div className="flex m-auto w-4/5 h-1/5 rounded-3xl bg-secondary">
        <SongCard />
      </div>
      <div className="container m-auto bg-secondary w-4/5 h-3/5 max-h-max rounded-3xl">
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
          {/* Will be dynamic and mapped based on search results,
           but for now just pasted like this to see multiple */}
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

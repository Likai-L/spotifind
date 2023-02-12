'use client';

import SearchBar from 'app/(searchbar)/SearchBar';
import Map from 'app/(guarded)/people/(map)/Map';
import { useState } from 'react';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import UserCard from './UserCard';
import SongCard from './SongCard';

// TODO: Fix map pushing sidebar and layout around
export default function People() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden text-primary font-primary">
      <h1 className="text-[2.3vh] font-primary font-semibold ml-10 cursor-default">
        Find people with similar taste
        <SearchBar action="/people" label="Search for a song" />
      </h1>
      <div className="flex m-auto w-4/5 h-1/5 rounded-xl bg-secondary">
        <SongCard />
      </div>
      <div className="container m-auto bg-secondary min-w-[80%] w-4/5 h-3/5 max-h-max rounded-xl">
        <div className="flex flex-row">
          <h1 className="text-[2vh] p-5 cursor-default">x user/s found </h1>
          <div className="my-auto">
            <Button
              content="View on map"
              onClick={() => setShowMap(!showMap)}
              path={PEOPLE}
            />
          </div>
        </div>
        <div className="flex flex-row h-3/4 w-full m-auto overflow-x-auto overflow-y-hidden scrollbar-hide items-center">
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

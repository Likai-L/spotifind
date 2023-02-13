'use client';

import SearchBar from 'app/(searchbar)/SearchBar';
import Map from 'app/(guarded)/people/(map)/Map';
import { useEffect, useState } from 'react';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import UserCard from './UserCard';
import SongCard from './SongCard';
import useCurrentTrack from '@/hooks/useCurrentTrack';

// TODO: Fix map pushing sidebar and layout around
export default function People() {
  const [showMap, setShowMap] = useState(false);
  const { profile, setSearchInput, displayTrack, setDisplayTrack } =
    useGlobalContext();
  useCurrentTrack();

  const formatCurrentTrack = track => {
    return {
      trackName: track.name,
      artistName: track.artist,
      albumName: track.album,
      albumCoverUrl: track.albumCoverUrl,
      uri: track.uri
    };
  };

  useEffect(() => {
    if (!displayTrack.trackName) {
      setDisplayTrack(formatCurrentTrack(profile.playerState));
    }
  }, [profile.playerState]);

  const setNowPlaying = e => {
    e.preventDefault();
    setDisplayTrack(formatCurrentTrack(profile.playerState));
  };

  useEffect(() => {
    setSearchInput('');
  }, []);

  return (
    <div className="w-full h-full flex-col space-y-8 overflow-hidden text-primary font-primary">
      <div className="flex">
        <h1 className="text-[2.3vh] font-primary font-semibold ml-10 cursor-default">
          Find people with similar taste
          <SearchBar action={PEOPLE} label="Search for a user" />
        </h1>
        <Button
          addedclasses="text-md mx-4 mt-8"
          content="Set to Now Playing"
          onClick={setNowPlaying}
          path={PEOPLE}
          prefetch="true"
        />
      </div>
      <div className="flex m-auto w-4/5 h-1/5 rounded-xl bg-secondary font-semibold text-xl px-4">
        {displayTrack.trackName ? (
          <SongCard track={displayTrack} />
        ) : (
          <span className="flex items-center">
            Start listening or search for a song.
          </span>
        )}
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

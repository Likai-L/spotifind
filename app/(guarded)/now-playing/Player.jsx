'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Button from 'app/(button)/Button';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import classNames from 'classnames';
import { useGlobalContext } from 'app/(context)';
import { PEOPLE } from 'public/constants/pathNames';
import MusixMatch from './MusixmatchLogo';
import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function Player() {
  const { profile, setDisplayTrack } = useGlobalContext();
  const playerClassNames = classNames(
    'rounded-[50%]',
    'hover:scale-100',
    'animate-spin-slow',
    {
      pause: !profile.playerState.isPlaying
    }
  );
  useCurrentTrack();

  // Reset display track
  useEffect(() => {
    setDisplayTrack({
      trackName: profile.playerState.name,
      artistName: profile.playerState.artist,
      albumName: profile.playerState.album,
      albumCoverUrl: profile.playerState.albumCoverUrl,
      uri: profile.playerState.uri
    });
  }, [profile.playerState]);

  return (
    <Container classNames="w-[1500px] h-[600px] flex justify-evenly mx-auto">
      <div className="w-[20%]">
        <p className="text-[28px] font-bold my-[30px]">
          {profile.playerState.device
            ? `Playing on ${profile.playerState.device}`
            : 'No active device'}
        </p>
        <AlbumCover
          classNames={playerClassNames}
          height={280}
          priority="true"
          src={profile.playerState.albumCoverUrl || '/images/vinyl.webp'}
          trackUri={profile.playerState.uri}
          width={280}
        />
        <div className="text-center text-xl font-semibold">
          <p className="text-2xl mt-[20px] font-bold whitespace-pre-wrap">
            {profile.playerState.name}
          </p>
          <p className="mt-[20px] text-secondary">
            {profile.playerState.artist || ''}
          </p>
          <p className="mt-[15px] text-secondary">
            {profile.playerState.album || ''}
          </p>
        </div>
      </div>
      <div className="w-[55%]">
        <div className="flex justify-between">
          <div className="text-3xl font-bold my-[30px] ">Lyrics</div>{' '}
          <MusixMatch />
        </div>

        <Container classNames="bg-container-light w-[100%] min-h-[300px] text-center text-xl font-bold leading-loose pt-[10px] px-[20px] overflow-auto scrollbar-hide">
          {profile.lyrics.lyrics_body && (
            <p className="whitespace-pre-line">{profile.lyrics.lyrics_body}</p>
          )}
          {!profile.lyrics.lyrics_body && (
            <p className="mt-[120px]">No available lyrics</p>
          )}
          <Script src={profile.lyrics.script_tracking_url || ''} />
        </Container>
        <div className="flex justify-evenly">
          <Button
            addedclasses="text-3xl mt-[40px]"
            content="People"
            path={PEOPLE}
            prefetch="true"
          />
          <Button
            addedclasses="text-3xl mt-[40px]"
            content="Comments"
            path=""
          />
        </div>
      </div>
    </Container>
  );
}

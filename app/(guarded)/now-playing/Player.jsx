'use client';

import Script from 'next/script';
import Button from 'app/(button)/Button';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import MusixMatch from './MusixmatchLogo';
import classNames from 'classnames';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGlobalContext } from 'app/(context)';
import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function Player() {
  const { profile } = useGlobalContext();
  const playerClassNames = classNames('rounded-[50%]', 'animate-spin-slow', {
    pause: !profile.playerState.isPlaying
  });
  useCurrentTrack();
  return (
    <Container classNames="w-[93%] h-[600px] flex justify-evenly mx-auto">
      <div className="w-[20%]">
        <p className="text-3xl font-bold my-[30px]">Now Playing</p>
        <AlbumCover
          src={profile.playerState.albumCoverUrl || '/images/vinyl.webp'}
          width={280}
          height={280}
          classNames={playerClassNames}
        />
        <div className=" text-center text-xl font-semibold  ">
          <p className="text-2xl mt-[20px] font-bold whitespace-pre-wrap">
            {profile.playerState.name}
          </p>
          <p className="mt-[20px]">
            {profile.playerState.artist || 'Not playing.'}
          </p>
          <p className="mt-[5px]">{profile.playerState.album || ''}</p>
          <p className="mt-[5px]">
            {profile.playerState.isPlaying
              ? 'Playing'
              : profile.playerState.noActiveDevice
              ? ''
              : 'Paused'}
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
          <Button addedclasses="text-3xl mt-[40px]" content="People" path="" />
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

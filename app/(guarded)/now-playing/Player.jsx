'use client';

import Script from 'next/script';
import Button from 'app/(button)/Button';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import MusixMatch from './MusixmatchLogo';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGlobalContext } from 'app/(context)';
import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function Player() {
  const { profile } = useGlobalContext();
  useCurrentTrack();
  return (
    <Container classNames="w-[95%] h-[600px] flex justify-evenly mx-auto overflow-scroll scrollbar-hide">
      <div className="w-[20%]">
        <p className="text-4xl font-bold my-[30px]">Now Playing</p>
        <AlbumCover
          src={profile.playerState.albumCoverUrl || '/images/vinyl.webp'}
          classNames="w-[100%] "
        />
        <div className="w-[100%] text-center text-xl font-semibold">
          <p className="text-2xl mt-[20px] font-bold">
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
          <div className="text-4xl font-bold my-[30px] ">Lyrics</div>{' '}
          <MusixMatch />
        </div>

        <Container classNames="bg-container-light w-[100%] min-h-[300px] overflow-auto scrollbar-hide">
          <div className="w-[100%] text-center text-xl font-bold leading-loose pt-[10px]">
            {profile.lyrics.lyrics_body && (
              <p className="whitespace-pre-line">
                {profile.lyrics.lyrics_body}
              </p>
            )}
            {!profile.lyrics.lyrics_body && <p>No available lyrics</p>}
            <Script src={profile.lyrics.script_tracking_url || ''} />
          </div>
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

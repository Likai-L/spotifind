'use client';

import Button from 'app/(button)/Button';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function Player() {
  useCurrentTrack();
  return (
    <Container classNames="w-[95%] h-[600px] flex justify-evenly mx-auto">
      <div className="w-[20%]">
        <p className="text-4xl font-bold my-[30px]">Now Playing</p>
        <AlbumCover
          src="https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4a88"
          classNames="w-[100%] "
        />
        <div className="w-[100%] text-center text-xl font-semibold">
          <p className="text-2xl mt-[20px] font-bold">Movie</p>
          <p className="mt-[20px]">Weyes Blood</p>
          <p className="mt-[5px]">Titanic Rising</p>
        </div>
      </div>
      <div className="w-[55%]  ">
        <p className="text-4xl font-bold my-[30px] ">Lyrics</p>
        <Container classNames="bg-container-light w-[100%] min-h-[300px] overflow-auto scrollbar-hide">
          <div className="w-[100%] text-center text-xl font-bold leading-loose pt-[10px]">
            <p>Glass in the Park</p>
            <p>This is how it feels to be in love</p>
            <p>This is life from above</p>
            <p>There's no books anymore</p>
            <p>I'm bound to that summer</p>
            <p>Big box office hit</p>
            <p>Making love to a counterfeit</p>
            <p>Why did so many</p>
            <p>Get a rise out of me?</p>
            <p>I love the movies</p>
            <p>Some people feel what some people don't</p>
            <p>Some people-watch until they explode</p>
          </div>
        </Container>
        <div className="flex justify-evenly">
          <Button content="People" path="" addedclasses="text-3xl mt-[40px]" />
          <Button
            content="Comments"
            path=""
            addedclasses="text-3xl mt-[40px]"
          />
        </div>
      </div>
    </Container>
  );
}

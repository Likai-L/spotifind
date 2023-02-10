'use client';

import Image from 'next/image';
import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useProfile from 'src/hooks/useProfile';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Profile() {
  useProfile();
  const { profile } = useGlobalContext();
  return (
    <div className="p-12 flex justify-center">
      <SkeletonTheme baseColor="#31243a" highlightColor="#44345d">
        <div className="text-center w-[200px] ">
          {profile.avatar ? (
            <Image
              alt="pfp"
              src={profile.avatar}
              width={200}
              height={200}
              className="rounded-3xl"
            />
          ) : (
            <Skeleton className="w-[200px] h-[200px] rounded-3xl" />
          )}

          <div className="text-2xl mt-4 truncate">
            {profile.name || <Skeleton />}
          </div>
          <div className="mt-1 opacity-30 truncate">
            {profile.handle || <Skeleton />}
          </div>
        </div>
        <Container classNames="lg:w-[500px] xl:w-[800px] 2xl:w-[1000px] 3xl:w-[1200px]  ml-[50px] flex items-center overflow-x-scroll scrollbar-hide">
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
          <AlbumCover
            classNames="w-[200px] h-[200px] ml-[30px]"
            src="https://i.scdn.co/image/ab67616d0000b273d0a93f4d6d61ec9f850218f9"
          />
        </Container>
      </SkeletonTheme>
    </div>
  );
}
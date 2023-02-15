'use client';

import Image from 'next/image';
import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';
import AlbumCover from 'app/(guarded)/now-playing/AlbumCover';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useProfile from 'src/hooks/useProfile';
import 'react-loading-skeleton/dist/skeleton.css';
import useChatEngine from '@/hooks/useChatEngine';
import useRecommendedTracks from '@/hooks/useRecommendedTracks';
import useGeoLocation from '@/hooks/useGeoLocation';

export default function Profile() {
  useProfile();
  useRecommendedTracks();
  useChatEngine();
  useGeoLocation();
  const { profile } = useGlobalContext();

  return (
    <div className="p-12 flex justify-center">
      <SkeletonTheme baseColor="#31243a" highlightColor="#44345d">
        <div className="text-center w-[200px] ">
          {profile.pfp ? (
            <Image
              alt="pfp"
              className="rounded-3xl"
              height={200}
              src={profile.pfp}
              width={200}
            />
          ) : (
            <Skeleton className="w-[200px] h-[200px] rounded-3xl" />
          )}

          <div className="text-2xl mt-4 truncate">
            {profile.name || <Skeleton />}
          </div>
        </div>
        <Container classNames="lg:w-[500px] xl:w-[800px] 2xl:w-[1000px] 3xl:w-[1200px] ml-[50px] flex flex-col justify-evenly">
          <div className="text-3xl font-bold ml-[30px]">My Recent Taste</div>
          <div className="flex items-center overflow-x-scroll overflow-y-hidden scrollbar-hide mx-[15px]">
            {profile.tracks.length > 0 ? (
              profile.tracks.map(track => {
                return (
                  <AlbumCover
                    classNames="mx-[15px]"
                    height={200}
                    key={track.uri}
                    src={track.albumCoverUrl}
                    trackUri={track.uri}
                    width={200}
                  />
                );
              })
            ) : (
              <Skeleton className="w-[200px] h-[200px] rounded-3xl" />
            )}
          </div>
        </Container>
      </SkeletonTheme>
    </div>
  );
}

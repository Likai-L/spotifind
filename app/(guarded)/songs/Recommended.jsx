'use client';

import { useGlobalContext } from 'app/(context)';
import AlbumGrid from './AlbumGrid';

export default function Recommended() {
  const { recommendedTracks } = useGlobalContext();

  return (
    <>
      <div className="text-4xl font-bold my-[30px]">Recommended</div>
      {recommendedTracks.length > 0 ? (
        <AlbumGrid tracks={recommendedTracks} />
      ) : (
        <div className="flex justify-center items-center h-full text-3xl font-bold">
          Unable to find recommendations.
        </div>
      )}
    </>
  );
}

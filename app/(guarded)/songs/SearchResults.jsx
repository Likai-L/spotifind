'use client';

import { useGlobalContext } from 'app/(context)';
import AlbumTile from './AlbumTile';

export default function SearchResults() {
  const { searchInput, searchResults } = useGlobalContext();

  return (
    <>
      <div className="text-4xl font-bold my-[30px]">
        Results for:
        <span className="text-secondary">{` ${searchInput} `}</span>
      </div>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-5 col-start-1 h-full overflow-y-scroll scrollbar-hide">
          {searchResults.map(track => {
            return <AlbumTile track={track} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full text-3xl font-bold">
          No results found.
        </div>
      )}
    </>
  );
}

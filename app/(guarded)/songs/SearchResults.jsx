'use client';

import { useGlobalContext } from 'app/(context)';
import AlbumGrid from './AlbumGrid';

export default function SearchResults() {
  const { searchInput, searchResults } = useGlobalContext();

  return (
    <>
      <div className="text-4xl font-bold my-[30px]">
        Results for:
        <span className="text-secondary">{` ${searchInput} `}</span>
      </div>
      {searchResults.length > 0 ? (
        <AlbumGrid tracks={searchResults} />
      ) : (
        <div className="flex justify-center items-center h-full text-3xl font-bold">
          No results found.
        </div>
      )}
    </>
  );
}

'use client';

import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';
import AlbumTile from './AlbumTile';

export default function Results() {
  const { searchInput, searchResults } = useGlobalContext();

  return (
    <Container classNames="flex flex-col justify-between w-full h-full font-primary rounded-3xl px-12 pt-4 cursor-default">
      <div className="text-4xl font-bold my-[30px]">
        Results for:
        <span className="text-secondary">{` ${searchInput} `}</span>
      </div>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-5 h-full overflow-y-scroll scrollbar-hide">
          {searchResults.map(track => {
            return <AlbumTile track={track} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full text-3xl font-bold">
          No results found.
        </div>
      )}
    </Container>
  );
}

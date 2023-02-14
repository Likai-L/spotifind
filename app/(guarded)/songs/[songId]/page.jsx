'use client';

import { useEffect } from 'react';
import SearchBar from 'app/(searchbar)/SearchBar';
import { SONGS } from 'public/constants/pathNames';
import Container from 'app/(container)/Container';
import { useGlobalContext } from 'app/(context)';
import SongContainer from './SongContainer';
import SearchResults from '../SearchResults';
import useSongId from '@/hooks/useSongId';
// import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function SongDetails({ params: { songId } }) {
  const track = useSongId(songId);
  const { searchInput, setSearchInput } = useGlobalContext();

  // Uncomment useCurrentTrack() to hide axios errors to api/socket in
  // /people when we do our presentation.
  // useCurrentTrack();

  useEffect(() => {
    setSearchInput('');
  }, []);

  return (
    <div className="flex flex-col justify-center max-h-[90vh] h-[90vh] w-[80vw]">
      <div className="flex justify-center pb-8">
        <SearchBar action={SONGS} label="Search for a song" />
      </div>
      <Container classNames="flex flex-col justify-between w-full max-h-5/6 h-5/6 font-primary rounded-3xl px-12 pt-4 cursor-default">
        {searchInput.length > 0 ? (
          <SearchResults />
        ) : (
          <SongContainer track={track} />
        )}
      </Container>
    </div>
  );
}

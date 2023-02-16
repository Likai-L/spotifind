'use client';

import { motion as m } from 'framer-motion';

import SearchBar from 'app/(searchbar)/SearchBar';
import { SONGS } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';
import { useEffect } from 'react';
import Recommended from './Recommended';
import SearchResults from './SearchResults';
// import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function Songs() {
  const { searchInput, setSearchInput, setDisplayTrack } = useGlobalContext();

  // Uncomment useCurrentTrack() to hide axios errors to api/socket in
  // /people when we do our presentation.
  // useCurrentTrack();

  useEffect(() => {
    setSearchInput('');
    setDisplayTrack({});
  }, []);

  return (
    <m.div
      animate={{ opacity: 1 }}
      className="flex flex-col justify-center max-h-[90vh] h-[90vh] w-[80vw]"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}>
      <div className="flex justify-center pb-8">
        <SearchBar action={SONGS} label="Search for a song" />
      </div>
      <Container classNames="flex flex-col justify-between w-full max-h-5/6 h-5/6 font-primary rounded-3xl px-12 pt-4 cursor-default">
        {searchInput.length > 0 ? <SearchResults /> : <Recommended />}
      </Container>
    </m.div>
  );
}

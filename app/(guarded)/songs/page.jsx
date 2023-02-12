/* eslint-disable import/extensions */

'use client';

import SearchBar from 'app/(searchbar)/SearchBar';
import { SONGS } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';
import Recommended from './Recommended';
import SearchResults from './SearchResults';

export default function Songs() {
  const { searchInput } = useGlobalContext();

  return (
    <div className="flex flex-col justify-center max-h-[90vh] h-[90vh] w-[80vw]">
      <div className="flex justify-center pb-8">
        <SearchBar action={SONGS} label="Search for a song" />
      </div>
      <Container classNames="flex flex-col justify-between w-full max-h-5/6 h-5/6 font-primary rounded-3xl px-12 pt-4 cursor-default">
        {searchInput.length > 0 ? <SearchResults /> : <Recommended />}
      </Container>
    </div>
  );
}

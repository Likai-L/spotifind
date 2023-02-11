/* eslint-disable import/extensions */

'use client';

import SearchBar from 'app/(searchbar)/SearchBar';
import { SONGS } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import Recommended from './Recommended';
import Results from './Results';
import useSearch from '@/hooks/useSearch';

export default function Songs() {
  const { searchResults } = useGlobalContext();
  useSearch();

  return (
    <div className="flex flex-col justify-center h-[90vh] w-[80vw]">
      <div className="flex justify-center pb-8">
        <SearchBar action={SONGS} label="Search for a song" />
      </div>
      {searchResults.length > 0 ? <Results /> : <Recommended />}
    </div>
  );
}

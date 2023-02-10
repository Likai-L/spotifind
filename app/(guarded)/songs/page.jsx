import SearchBar from 'app/(searchbar)/SearchBar';
import { SONGS } from 'public/constants/pathNames';
import SongContainer from './SongContainer';

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-[90vh] w-[80vw]">
      <div className="flex justify-center pb-8">
        <SearchBar action={SONGS} label="Search for a song" />
      </div>
      <SongContainer />
    </div>
  );
}

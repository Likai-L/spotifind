import SearchBar from 'app/(searchbar)/SearchBar';

export default function Home() {
  return (
    <div className="">
      <SearchBar action="/songs" label="Search for a song" />
    </div>
  );
}

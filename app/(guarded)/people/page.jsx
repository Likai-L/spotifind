import SearchBar from 'app/(searchbar)/SearchBar';

export default function People() {
  return <SearchBar action="/people" label="Search for a user" />;
}

import { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';
import { getHeaders } from '../helpers/apiHelpers';
import { getSearchResults } from '../helpers/searchHelpers';

export default function useSearch() {
  const { credentials, searchInput, setSearchResults } = useGlobalContext();
  const searchQuery = encodeURIComponent(searchInput);

  console.log(searchInput);
  console.log(searchQuery);

  // todo: STRETCH: Filter options for track/artist/album => '%2Cartist%2Calbum'
  useEffect(() => {
    if (credentials.accessToken && searchQuery) {
      axios(
        `${SPOTIFY_ENDPOINT}/search?q=${searchQuery}&type=track`,
        getHeaders(credentials.accessToken)
      )
        .then(res => {
          setSearchResults(getSearchResults(res.data.tracks.items));
        })
        .catch(err => console.log(err));
    }
  }, [searchInput]);
}

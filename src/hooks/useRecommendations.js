import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';
import { getHeaders } from '@/helpers/apiHelpers';
import { getTopArtistIds, getTopTrackIds } from '@/helpers/profileHelpers';

export default function useRecommendations() {
  const { credentials, profile, setRecommendedTracks } = useGlobalContext();
  const [genre, setGenre] = useState('');

  // Get genre seeds
  useEffect(() => {
    if (credentials.accessToken && !genre) {
      axios(
        `${SPOTIFY_ENDPOINT}/recommendations/available-genre-seeds`,
        getHeaders(credentials.accessToken)
      )
        .then(res => {
          // This gives every single possible genre, so this shuffles them and picks a random one...
          const genresData = res.data.genres;
          const shuffleGenres = genresData.sort(() => 0.5 - Math.random());

          setGenre(shuffleGenres[0]);
        })
        .catch(err => console.log(err));
    }
  }, [profile]);

  // Get recommendations
  useEffect(() => {
    const artistIds = getTopArtistIds(profile.tracks, 2);
    const artistSeeds = artistIds.join('%2C');

    const trackIds = getTopTrackIds(profile.tracks, 2);
    const trackSeeds = trackIds.join('%2C');

    if (credentials.accessToken && genre) {
      axios(
        `${SPOTIFY_ENDPOINT}/recommendations?limit=20&seed_artists=${artistSeeds}&seed_genres=${genre}&seed_tracks=${trackSeeds}`,
        getHeaders(credentials.accessToken)
      )
        .then(res => {
          setRecommendedTracks(res.data.tracks);
        })
        .catch(err => console.log(err));
    }
  }, [profile]);
}

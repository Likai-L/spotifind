import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { SPOTIFY_BASE_URL } from 'public/constants/pathNames';
import { getHeaders, getTopArtistIds, getTopTrackIds } from '@/helpers/helpers';

export default function useRecommendedTracks() {
  const { credentials, profile, setRecommendedTracks } = useGlobalContext();
  const [genre, setGenre] = useState('');

  // Get genre seeds
  useEffect(() => {
    if (credentials.accessToken && !genre) {
      axios(
        `${SPOTIFY_BASE_URL}/recommendations/available-genre-seeds`,
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
        `${SPOTIFY_BASE_URL}/recommendations?limit=20&seed_artists=${artistSeeds}&seed_genres=${genre}&seed_tracks=${trackSeeds}`,
        getHeaders(credentials.accessToken)
      )
        .then(res => {
          const trackData = res.data.tracks;

          const tracksMap = trackData.map(track => {
            return {
              trackName: track.name,
              artist: track.artists[0].name,
              albumCoverUrl: track.album.images[0].url,
              uri: track.id,
              spotifyUrl: track.external_urls.spotify,
              trackPreview: track.preview_url
            };
          });

          setRecommendedTracks(tracksMap);
        })
        .catch(err => console.log(err));
    }
  }, [profile]);
}

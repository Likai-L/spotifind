import { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { LYRICS, SPOTIFY_BASE_URL } from 'public/constants/pathNames';
import { getHeaders, getLyricsFromData } from '@/helpers/helpers';

export default function useSongId(songId) {
  const { credentials, displayTrack, setDisplayTrack } = useGlobalContext();

  useEffect(() => {
    if (credentials.accessToken && songId) {
      axios(
        `${SPOTIFY_BASE_URL}/tracks/${songId}`,
        getHeaders(credentials.accessToken)
      ).then(res => {
        const trackData = {
          trackName: res.data.name,
          artistName: res.data.artists[0].name,
          albumCoverUrl: res.data.album.images[0].url,
          albumName: res.data.album.name,
          uri: res.data.id,
          spotifyUrl: res.data.external_urls.spotify,
          trackPreview: res.data.preview_url
        };

        setDisplayTrack(trackData);
      });
    }
  }, []);

  useEffect(() => {
    const callLyricsApi = async () => {
      if (displayTrack.trackName && !displayTrack.lyrics) {
        const lyricsData = await axios(LYRICS, {
          params: {
            track: displayTrack.trackName,
            artist: displayTrack.artistName
          }
        });
        const lyricsInfo = getLyricsFromData(lyricsData.data);

        setDisplayTrack(prev => ({ ...prev, lyrics: lyricsInfo.lyrics_body }));
      }
    };
    callLyricsApi();
  }, [displayTrack]);

  return displayTrack;
}

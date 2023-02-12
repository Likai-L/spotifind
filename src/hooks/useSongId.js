import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { LYRICS, SPOTIFY_BASE_URL } from 'public/constants/pathNames';
import { getHeaders, getLyricsFromData } from '@/helpers/helpers';

export default function useSongId(songId) {
  const { credentials } = useGlobalContext();
  const [song, setSong] = useState({});

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
          uri: res.data.id
        };

        setSong(trackData);
      });
    }
  }, []);

  useEffect(() => {
    const callLyricsApi = async () => {
      if (song && !song.lyrics) {
        const lyricsData = await axios(LYRICS, {
          params: {
            track: song.trackName,
            artist: song.artistName
          }
        });
        const lyricsInfo = getLyricsFromData(lyricsData.data);

        setSong(prev => ({ ...prev, lyrics: lyricsInfo.lyrics_body }));
      }
    };
    callLyricsApi();
  }, [song]);

  return song;
}

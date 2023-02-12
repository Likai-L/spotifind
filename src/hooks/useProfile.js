import { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import {
  PROFILE,
  RECENTLIKES,
  SPOTIFY_BASE_URL
} from 'public/constants/pathNames';
import { getHeaders, getTracks } from '../helpers/helpers';

export default function useProfile() {
  const { credentials, profile, setProfile } = useGlobalContext();

  useEffect(() => {
    if (credentials.accessToken) {
      axios(`${SPOTIFY_BASE_URL}/me`, getHeaders(credentials.accessToken))
        .then(res => {
          const profileData = res.data;
          setProfile({
            ...profile,
            name: profileData.display_name,
            uri: profileData.id,
            pfp: profileData.images[0].url
          });
        })
        .catch(err => console.log(err));
    }
  }, [credentials.accessToken]);

  useEffect(() => {
    if (!profile.uri) return;
    axios
      .post(PROFILE, {
        spotifyUserUri: profile.uri,
        username: profile.name,
        profilePictureUrl: profile.pfp,
        currentSongUri: profile.playerState.name,
        recentLikes: profile.tracks
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log('prisma error', err));
  }, [profile.uri]);

  // if the first liked track changes call /api/recentLikes to update the db
  useEffect(() => {
    if (!profile.tracks[0]) return;
    axios
      .post(RECENTLIKES, {
        recentLikes: profile.tracks,
        spotifyUserUris: profile.uri
      })
      .then(() => {
        console.log('recent likes updated');
      })
      .catch(err => console.log('error when updating recent likes', err));
  }, [profile.tracks[0]]);

  useEffect(() => {
    if (credentials.accessToken) {
      axios(
        `${SPOTIFY_BASE_URL}/me/tracks`,
        getHeaders(credentials.accessToken)
      )
        .then(res => {
          setProfile(prev => ({
            ...prev,
            tracks: getTracks(res.data.items)
          }));
        })
        .catch(err => console.log(err));
    }
  }, [credentials.accessToken]);
}

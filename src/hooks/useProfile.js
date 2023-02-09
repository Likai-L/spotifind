import { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';

export default function useProfile() {
  const { credentials, setProfile } = useGlobalContext();
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${credentials.accessToken}}`,
      'Content-Type': 'application/json'
    }
  };
  useEffect(() => {
    if (credentials.accessToken) {
      axios(`${SPOTIFY_ENDPOINT}/me`, axiosConfig)
        .then(res => {
          console.log(res.data);
          const profileData = res.data;
          setProfile({
            name: profileData.display_name,
            uri: profileData.uri,
            handle: profileData.id,
            avatar: profileData.images[0].url
          });
        })
        .catch(err => console.log(err));
    }
  }, [credentials.accessToken]);
}
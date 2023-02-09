import { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from 'app/(context)';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';

export default function useProfile() {
  const { credentials } = useGlobalContext();
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
        })
        .catch(err => console.log(err));
    }
  }, [credentials.accessToken]);
}

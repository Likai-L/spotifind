import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth(authCode) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post('api/token', { authCode })
      .then(res => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(err => console.log(err));
  }, [authCode]);
}

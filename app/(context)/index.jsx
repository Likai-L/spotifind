'use client';

import { createContext, useContext, useMemo, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  // User Auth Credentials
  const [credentials, setCredentials] = useState({
    accessToken: null,
    refreshToken: null,
    expiresIn: null
  });

  // Spotify Profile
  const [profile, setProfile] = useState({
    name: '',
    uri: '',
    avatar: '',
    handle: ''
  });

  const { children } = props;

  // TODO: refactor this for better state management patterns
  const globalStates = useMemo(
    () => ({
      credentials,
      setCredentials,
      profile,
      setProfile
    }),
    [profile.uri, credentials.accessToken]
  );

  // Component provider, wrap around other components
  // Children have access to context
  return (
    <GlobalContext.Provider value={globalStates}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);

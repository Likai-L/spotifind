'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

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
    handle: '',
    tracks: []
  });

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    if (searchInput === '') {
      setSearchResults({});
    }
  }, [searchInput]);

  const { children } = props;

  // TODO: refactor this for better state management patterns
  const globalStates = useMemo(
    () => ({
      credentials,
      setCredentials,
      profile,
      setProfile,
      searchInput,
      setSearchInput,
      searchResults,
      setSearchResults
    }),
    [
      profile.uri,
      credentials.accessToken,
      profile.tracks,
      searchInput,
      searchResults
    ]
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

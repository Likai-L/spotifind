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
    tracks: [],
    playerState: { noActiveDevice: true },
    lyrics: {}
  });

  const [recommendedTracks, setRecommendedTracks] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    if (searchInput === '') {
      setSearchResults({});
    }
  }, [searchInput]);

  // Geolocation
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
      setSearchResults,
      recommendedTracks,
      setRecommendedTracks,
      latitude,
      setLatitude,
      longitude,
      setLongitude
    }),
    [
      profile.uri,
      credentials.accessToken,
      profile.tracks,
      profile.playerState,
      searchInput,
      searchResults,
      recommendedTracks,
      profile.lyrics
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

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
    pfp: '',
    tracks: [],
    playerState: { noActiveDevice: true },
    lyrics: {}
  });

  const [recommendedTracks, setRecommendedTracks] = useState({});
  const [displayTrack, setDisplayTrack] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({});

  const [volume, setVolume] = useState({
    volume: 0.1,
    finalVolume: 0.1,
    muted: false,
    isPlaying: false
  });

  const [audioPreview, setAudioPreview] = useState({});

  useEffect(() => {
    if (searchInput === '') {
      setSearchResults({});
    }
  }, [searchInput]);

  // Geolocation
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [comments, setComments] = useState([]);

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
      displayTrack,
      setDisplayTrack,
      volume,
      setVolume,
      audioPreview,
      setAudioPreview,
      latitude,
      setLatitude,
      longitude,
      setLongitude,
      comments,
      setComments
    }),
    [
      profile.uri,
      credentials.accessToken,
      profile.tracks,
      profile.playerState,
      searchInput,
      searchResults,
      recommendedTracks,
      displayTrack,
      profile.lyrics,
      volume,
      audioPreview,
      comments
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

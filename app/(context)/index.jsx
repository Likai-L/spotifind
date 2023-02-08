'use client';

import { createContext, useContext, useMemo, useState } from 'react';
// This basically initializes an instance of a context API
export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  // state will be accessible globally, should be easy enough to link to spotify, there's a guide on connecting to existing stuff
  // user auth credentials
  const [credentials, setCredentials] = useState({
    accessToken: null,
    refreshToken: null,
    expiresIn: null
  });
  // spotify profile
  const [username, setUsername] = useState('');
  const { children } = props;
  // TODO: refactor this for better state management patterns
  const globalStates = useMemo(
    () => ({
      username,
      setUsername,
      credentials,
      setCredentials
    }),
    [username, credentials.accessToken]
  );
  // component provider, wraps around other components, components that are wrapped
  // have access to the context username, secret, basically which account is logged in
  // and if there is anyone logged in at all
  return (
    <GlobalContext.Provider value={globalStates}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);

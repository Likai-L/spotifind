'use client'
import React, { useState, createContext } from 'react';
//This basically initializes an instance of a context API
export const Context = createContext();

export const ContextProvider = props => {
  //state will be accessible globally, should be easy enough to link to spotify, there's a guide on connecting to existing stuff
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  //component provider, wraps around other components, components that are wrapped
  //have access to the context username, secret, basically which account is logged in
  //and if there is anyone logged in at all
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

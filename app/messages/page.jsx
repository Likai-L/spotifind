'use client';
import React, { useState, useEffect, useContext } from 'react';
import styles from '@/styles/Home.module.css';
import { getOrCreateChat } from 'react-chat-engine';
import dynamic from 'next/dynamic';
//better to import this way, otherwise importting regularly may cause error if api is not yet ready?
const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

export default function Messages() {
  const [username, setUsername] = useState('');

  //with maybe a little modification this function can be called so easily to 
  //create a new chat by passing in dynamic credentials
  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    );
  }
  return (
    <div className={"text-blue--600 w-[70vw]"}>Messages
      <ChatEngine
        height="70vh"
        projectID='f06a82ab-ee91-4d7d-9b6d-90b79d3392ca'
        userName='Larsy'
        userSecret='123qwe'
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>);
}

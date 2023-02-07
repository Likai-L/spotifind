'use client';
import React, { useState, useEffect, useContext } from 'react';
import styles from '@/styles/Home.module.css';
import './messages.css'
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
          className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className={'text-white'} onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    );
  }
  return (
    <div className={"w-[65vw]"}>
      <ChatEngine
        height="80vh"
        projectID='f06a82ab-ee91-4d7d-9b6d-90b79d3392ca'
        userName='Larsy'
        userSecret='123qwe'
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>);
}

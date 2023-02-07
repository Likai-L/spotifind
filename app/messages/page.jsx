'use client';

// This will use useContext when we have more set up in our app
import { useState } from 'react';
import './messages.css';
import { getOrCreateChat } from 'react-chat-engine';
import dynamic from 'next/dynamic';

// better to import this way, otherwise importting regularly may cause error if api is not yet ready?
const ChatEngine = dynamic(() =>
  import('react-chat-engine').then(module => module.ChatEngine)
);

export default function Messages() {
  const [username, setUsername] = useState('');

  // with maybe a little modification required this function can be called easily to
  // create a new chat and passing in dynamic credentials
  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          className="font-primary border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          onChange={e => setUsername(e.target.value)}
          placeholder="Find by username"
          value={username}
        />
        <button
          className="font-primary text-white text-lg mx-2 my-4"
          onClick={() => createDirectChat(creds)}
          type="submit">
          Create
        </button>
      </div>
    );
  }
  // Can change userName to  // Larsy Bill Bob test// to switch users, passwords are all the same
  // userName and userSecret will use contextAPI or props if I cant get context to work for some reason
  return (
    <div className="w-[65vw]">
      <ChatEngine
        height="80vh"
        projectID="f06a82ab-ee91-4d7d-9b6d-90b79d3392ca"
        renderNewChatForm={creds => renderChatForm(creds)}
        userName="Bill"
        userSecret="123qwe"
      />
    </div>
  );
}

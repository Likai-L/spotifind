'use client';

import React, { useState } from 'react';

export default function UserSearch() {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const searched = { title };
    // make request to database to find a user
    fetch('', {
      method: 'GET'
    });
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setTitle(e.target.value)}
          required
          type="text"
          value={title}
        />
        <button type="submit">Submit</button>
      </form>
      {title}
    </div>
  );
}

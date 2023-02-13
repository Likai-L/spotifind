'use client';

import { useState } from 'react';
import getUserByName from '@/helpers/getUserByName';

export default function UserSearch() {
  const [title, setTitle] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const search = { title };
    // make request to database to find a user with that name!
    getUserByName(search);
  };
  return (
    <div className="">
      <form onSubmit={() => handleSubmit}>
        <input
          onChange={e => setTitle(e.target.value)}
          required
          type="text"
          value={title}
        />
        <button type="button">Submit</button>
      </form>
      {title}
    </div>
  );
}

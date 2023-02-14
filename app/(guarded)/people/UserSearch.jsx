'use client';

import { useState } from 'react';
import getUserByName from '@/helpers/getUserByName';

export default function UserSearch() {
  const [title, setTitle] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    // make request to database to find a user with that name!
    getUserByName({ title });
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

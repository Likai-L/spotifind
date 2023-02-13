'use client';

import { useState } from 'react';
import axios from 'axios';
import { USERSEARCH } from 'public/constants.pathNames';

export default function UserSearch() {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const search = { title };
    // make request to database to find a user with that name!
    axios
      .post(USERSEARCH, {
        name: search
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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

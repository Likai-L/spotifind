'use client';

import { useState } from 'react';
import { useGlobalContext } from 'app/(context)';
import classNames from 'classnames';
import SpotifyIcon from 'app/(nav)/(icons)/SpotifyIcon';
import useSearch from '@/hooks/useSearch';

export default function SearchBar(props) {
  const { action, label } = props;
  const { searchInput, setSearchInput } = useGlobalContext();
  const [focus, setFocus] = useState(false);
  useSearch();

  const handleChange = async e => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // TODO: Apply animate-spin to the spotifyicon while loading
  const handleSubmit = e => {
    e.preventDefault();
  };

  const formClasses =
    'flex justify-between items-center overflow-hidden bg-primary rounded-3xl w-80 max-w-md h-11 shadow-[0_0.2rem_0.3rem_0.1rem_rgb(0,0,0,0.2)]';

  const inputClasses =
    'bg-transparent text-xl w-10/12 ml-4 focus:outline-none hover:cursor-text z-10';

  const labelClasses = classNames('absolute text-xl ml-4', {
    'fade-out': focus || searchInput,
    'fade-in hover:animate-pulse': !focus && !searchInput
  });

  return (
    <div className="flex font-bold text-[rgb(245,245,245)]/50 fade-in-down">
      <form
        action={action}
        className={formClasses}
        method="post"
        onSubmit={handleSubmit}>
        <label className={labelClasses} htmlFor="search-bar">
          {label}
        </label>
        <input
          className={inputClasses}
          id="search-bar"
          name="search-bar"
          onBlurCapture={() => setFocus(false)}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          type="text"
          value={searchInput}
        />
        <span>
          <button className="m-2 hover:animate-[spin_1s]" type="submit">
            <SpotifyIcon />
          </button>
        </span>
      </form>
    </div>
  );
}

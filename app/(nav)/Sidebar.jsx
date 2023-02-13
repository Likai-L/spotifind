'use client';

import { useGlobalContext } from 'app/(context)';
import Link from 'next/link';
import NavLogo from './Logo';
import NavItems from './(icons)/index';

export default function Sidebar() {
  const { setCredentials, setProfile, setRecommendedTracks, setDisplayTrack } =
    useGlobalContext();

  const logout = e => {
    e.preventDefault();
    setCredentials({});
    setProfile({});
    setRecommendedTracks({});
    setDisplayTrack({});
  };

  return (
    <div className="h-full px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-72 bg-nav">
      <div className="flex flex-col">
        <NavLogo />

        <div className="flex flex-col items-start ml-8 mt-6 fade-in-left">
          <NavItems />
        </div>
      </div>

      <div className="flex cursor-pointer w-full overflow-hidden whitespace-nowrap hover:animate-pulse font-title">
        <Link
          className="flex py-4 px-4 w-full h-full hover:nav-item-active"
          href="/"
          onClick={logout}>
          {/* <div className="w-4">
            <LogoutIcon />
          </div> */}
          <span className="text-lg font-medium text-nav">Logout</span>
        </Link>
      </div>
    </div>
  );
}

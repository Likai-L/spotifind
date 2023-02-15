'use client';

import { useGlobalContext } from 'app/(context)';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import NavLogo from './Logo';
import NavItems from './(icons)/index';
import VolumeBar from './VolumeBar';

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

      <VolumeBar />

      <div className="flex cursor-pointer w-full overflow-hidden whitespace-nowrap hover:animate-pulse font-title">
        <Link
          className="flex py-4 px-4 w-full h-full hover:nav-item-active"
          href="/"
          onClick={logout}>
          <FontAwesomeIcon
            className="mx-3 mt-1 text-nav rotate-180"
            icon={faRightFromBracket}
            style={{ fontSize: 22 }}
          />
          <span className="text-lg font-medium text-nav">Logout</span>
        </Link>
      </div>
    </div>
  );
}

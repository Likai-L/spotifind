'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ListeningIcon from './ListeningIcon';
import MessageIcon from './MessageIcon';
import MusicIcon from './MusicIcon';
import PeopleIcon from './PeopleIcon';
import {
  NOW_PLAYING,
  PEOPLE,
  SONGS,
  MESSAGES
} from 'public/constants/pathNames';

const menuItems = [
  { id: 1, label: 'Now Playing', icon: ListeningIcon, path: NOW_PLAYING },
  { id: 2, label: 'Find Songs', icon: MusicIcon, path: SONGS },
  { id: 3, label: 'Find People', icon: PeopleIcon, path: PEOPLE },
  { id: 4, label: 'Messages', icon: MessageIcon, path: MESSAGES }
];

export default function NavItems() {
  const pathname = usePathname();

  const getActivePathClass = menu => {
    return classNames(
      'flex py-4 px-3 items-center w-full h-full hover:nav-item-active',
      {
        'nav-item-active': menu.path === pathname
      }
    );
  };

  return (
    <>
      {menuItems.map(({ icon: Icon, ...menu }) => {
        return (
          <div
            className="flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap hover:animate-fast-pulse"
            key={menu.id}>
            <Link className={getActivePathClass(menu)} href={menu.path}>
              <div className="w-10">
                <Icon />
              </div>
              <span className="text-xl font-medium text-nav">{menu.label}</span>
            </Link>
          </div>
        );
      })}
    </>
  );
}

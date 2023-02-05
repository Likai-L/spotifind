// import Link from 'next/link';
import ListeningIcon from '../(icons)/ListeningIcon';
import MessageIcon from '../(icons)/MessageIcon';
import MusicIcon from '../(icons)/MusicIcon';
import PeopleIcon from '../(icons)/PeopleIcon';

export default function Sidebar() {
  return (
    <div className="h-full px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-80 bg-nav">
      <ListeningIcon />
      <MessageIcon />
      <MusicIcon />
      <PeopleIcon />
    </div>
  );
}

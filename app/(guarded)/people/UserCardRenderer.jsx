import UserCard from './UserCard';
import getUsersBySong from '@/helpers/getUsersBySong';

export default function UserCardRenderer({ track }) {
  const { uri, albumCoverUrl, trackName, artistName, albumName } = track;
  getUsersBySong(uri);
  return <UserCard distance="3km" name="Bob" />;
}

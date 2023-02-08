import SpotifyIcon from 'app/(nav)/(icons)/SpotifyIcon';
import { LOGIN } from 'public/constants/pathNames';
import Button from './Button';

export default function LoginButton() {
  return (
    <Button
      addedclasses="text-3xl py-3 px-6"
      content={
        <span className="flex items-center">
          Login With <SpotifyIcon className="mx-1 ml-2" size="45" /> Spotify
        </span>
      }
      path={LOGIN}
    />
  );
}

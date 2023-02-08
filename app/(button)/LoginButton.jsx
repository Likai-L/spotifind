import SpotifyIcon from 'app/(nav)/(icons)/SpotifyIcon';
import Button from './Button';

export default function LoginButton() {
  return (
    <Button
      fontSize="text-3xl"
      content={
        <span className="flex items-center">
          Login With <SpotifyIcon className="mx-1" size="45" /> Spotify
        </span>
      }
      path="/api/login"
    />
  );
}

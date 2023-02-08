import SpotifyIcon from 'app/(nav)/(icons)/SpotifyIcon';
import Button from './Button';

export default function LoginButton() {
  return (
    <Button
      content={
        <span className="flex items-center">
          Login With <SpotifyIcon className="mx-1 ml-2" size="45" /> Spotify
        </span>
      }
      fontSize="text-3xl"
      padding="py-3 px-6"
      path="/api/login"
    />
  );
}

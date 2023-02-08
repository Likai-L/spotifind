import SpotifyIcon from 'app/(nav)/(icons)/SpotifyIcon';
import Button from './Button';

export default function LoginButton() {
  return (
    <Button
      content={
        <span className="flex items-center">
          Login With <SpotifyIcon className="mx-1" /> Spotify
        </span>
      }
      path="/api/login"
      prefetch={false}
    />
  );
}

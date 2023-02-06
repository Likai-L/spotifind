import Button from './(button)/Button';

export default function Home() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;

  const scope =
    'user-read-private user-read-email user-read-currently-playing user-top-read user-read-recently-played playlist-read-private';

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope
    .split(' ')
    .join('%20')}&response_type=code&show_dialog=true`;

  return (
    <div className="text-green-500">
      I am Home (AKA Now Playing)
      <a href={authUrl}>Login with Spotify</a>
      <Button path="/songs" text="Songs" />
    </div>
  );
}

const querystring = require('querystring');

const clientId = process.env.SPOTIFY_CLIENT_ID;

// redirect to /api/token to exchange authentication key for access token
const redirectUri = 'http://localhost:3000/api/token';

export default function handler(req, res) {
  // const state = generateRandomString(16);

  const scope =
    'user-read-private user-read-email user-library-read user-read-currently-playing user-top-read user-read-recently-played playlist-read-private';

  const queryString = querystring.stringify({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri,
    show_dialog: true
    // state: state,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryString}`);
}

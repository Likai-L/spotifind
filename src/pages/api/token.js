// const querystring = require('querystring');
const axios = require('axios');

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

export default async function handler(req, res) {
  console.log('🔥request came through');
  const code = req.body.authCode || null;
  if (!code) {
    console.log('🔥code undefined');
    res.status(401).json({
      code: null,
      message: 'Missing required query: authentication code'
    });
    return;
  }
  console.log('🔥reached authOptions!');
  console.log(redirectUri);
  console.log(typeof code, code.length, code);
  const authOptions = {
    body: {
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  console.log('🔥reached axios!');
  axios
    .post('https://accounts.spotify.com/api/token', authOptions.body, {
      headers: authOptions.headers
    })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => console.log(err.response.data));
}

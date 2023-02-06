// const querystring = require('querystring');
const axios = require('axios');

const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export default async function handler(req, res) {
  const code = req.query.code || null;
  if (!code) {
    res.status(400).jason({
      code: null,
      message: 'Missing required query: authentication code'
    });
    return;
  }
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
  axios
    .post('https://accounts.spotify.com/api/token', authOptions.body, {
      headers: authOptions.headers
    })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => console.log(err.message));
}

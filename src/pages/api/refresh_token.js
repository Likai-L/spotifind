// const querystring = require('querystring');
const axios = require('axios');

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const querystring = require('querystring');

export default function handler(req, res) {
  const refresh_token = req.query.refresh_token || null;
  if (!refreshToken) {
    res.status(400).json({ error: 'No refresh token provided' });
    return;
  }
  const url = 'https://accounts.spotify.com/api/token';
  const data = {
    refresh_token,
    grant_type: 'refresh_token'
  };
  const headers = {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
      'base64'
    )}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  axios
    .post(url, data, { headers })
    .then(response => {
      res.send({ access_token: response.data.access_token });
    })
    .catch(err => console.log(err.message));
}

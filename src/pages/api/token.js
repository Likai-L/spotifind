// const querystring = require('querystring');
const axios = require('axios');

const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const querystring = require('querystring');

export default async function handler(req, res) {
  const code = req.query.code || null;

  if (!code) {
    res.status(400).json({ error: 'No auth code provided' });
    return;
  }

  const url = 'https://accounts.spotify.com/api/token';
  const data = {
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code'
  };
  const headers = {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
      'base64'
    )}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  return new Promise(resolve => {
    axios
      .post(url, data, {
        headers
      })
      .then(response => {
        res.redirect(`/?${querystring.stringify(response.data)}`);
        return resolve();
      })
      .catch(err => {
        console.log(err.message);
        res.status(500).end();
        return resolve();
      });
  });
}

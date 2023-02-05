const querystring = require('querystring');
const axios = require('axios');

const redirectUri = 'http://localhost:3000/api/token';
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export default function handler(req, res) {
  const code = req.query.code || null;
  // const state = req.query.state || null;
  if (code) {
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
        console.log('success', response.data);
        res.status(200).json(response.data);
      });
  }
}

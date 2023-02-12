import { MUSIXMATCH_BASE_URL } from 'public/constants/pathNames';
import axios from 'axios';

const apiKey = process.env.MUSIXMATCH_API_KEY;

export default async function lyricsHandler(req, res) {
  return new Promise(resolve => {
    axios(`${MUSIXMATCH_BASE_URL}/matcher.lyrics.get`, {
      params: {
        apikey: apiKey,
        q_track: req.query.track,
        q_artist: req.query.artist
      }
    })
      .then(response => {
        res.status(200).send(response.data);
        return resolve();
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
        return resolve();
      });
  });
}

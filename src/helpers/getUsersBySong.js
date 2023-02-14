import { FINDUSERSBYSONG } from 'public/constants/pathNames';
import axios from 'axios';

export default function getUsersBySong(props) {
  const { uri } = props;

  axios
    .post(FINDUSERSBYSONG, {
      spotifySongUri: uri
    })
    .then(res => console.log(res.data))
    .catch(err => console.log('error from getUsersbySong', err));
}

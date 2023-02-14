import { FINDUSERSBYSONG } from 'public/constants/pathNames';
import axios from 'axios';

export default function getUsersBySong(props) {
  const { uri } = props;
  console.log('URI THAT IS POSTED :', uri);
  const query = axios.post(FINDUSERSBYSONG, {
    currentSongUri: uri
  });
  const result = query
    .then(res => console.log('RESPONSE.DATA!', res.data))
    .catch(err => console.log('error from getUsersbySong', err));
  return result;
}

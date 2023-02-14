import { USERSEARCH } from 'public/constants/pathNames';
import axios from 'axios';

export default function getUserByName(props) {
  const { title } = props;

  axios
    .post(USERSEARCH, {
      username: title
    })
    .then(res => console.log(res.data))
    .catch(err => console.log('error from getUserByName', err));
}

import { useGlobalContext } from 'app/(context)';
import axios from 'axios';

export default function useChatEngine() {
  const { profile } = useGlobalContext();
  const privateKey = process.env.NEXT_PUBLIC_REACT_APP_CHAT_ENGINE_PRIVATE_KEY;
  const data = {
    username: profile.name,
    secret: profile.uri
  };
  const config = {
    method: 'put',
    url: 'https://api.chatengine.io/users/',
    headers: {
      'PRIVATE-KEY': privateKey
    },
    data
  };

  axios(config)
    .then(() => {
      console.log(JSON.stringify('chat engine working'));
    })
    .catch(() => {
      console.log('insignificant chat engine error 500');
    });
}

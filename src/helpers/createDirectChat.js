import axios from 'axios';


const createDirectChat = async e => {
  e.preventDefault();
}
















// export default async function createDirectChat(
//   username1,
//   username1Secret,
//   username2
// ) {
//   console.log('inside create direct chat!');
//   console.log(username1);
//   console.log(username2);
//   const projectID = process.env.NEXT_PUBLIC_REACT_APP_CHAT_ENGINE_PROJECT_ID;
//   const privateKey = process.env.NEXT_PUBLIC_REACT_APP_CHAT_ENGINE_PRIVATE_KEY;
//   const data = {
//     usernames: [username1, username2],
//     id_direct_chat: true
//   };
//   const config = {
//     method: 'put',
//     url: 'https://api.chatengine.io/chats/',
//     { headers: {
//       'PROJECT-ID': projectID,
//       'User-Name': username1,
//       'User-Secret': username1Secret
//     }}
//     data
//   };
//   axios(config)
//     .then(res => console.log('success! got or created chat', res))
//     .catch(err => console.log('error, couldnt get or create chat', err));
// }

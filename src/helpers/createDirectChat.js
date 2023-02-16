import axios from 'axios';
// loggedInUser should be the global context profile object
// userToDM is just a string of the user you want to create/go to dm
export default async function createDirectChat(loggedInUser, userToDM) {
  const authObject = {
    'Project-ID': 'f06a82ab-ee91-4d7d-9b6d-90b79d3392ca',
    'User-Name': loggedInUser.name,
    'User-Secret': loggedInUser.uri
  };
  try {
    await axios.put(
      'https://api.chatengine.io/chats/',
      {
        usernames: [loggedInUser.name, userToDM],
        title: userToDM,
        is_direct_chat: true
      },
      { headers: authObject }
    );
  } catch (err) {
    console.log('somethign went wrong as usual', err);
  }
}

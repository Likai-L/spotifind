import axios from 'axios';
import { Server } from 'socket.io';
import { getHeaders } from 'src/helpers/profileHelpers';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on('connection', socket => {
      socket.on('access-token', token => {
        socket.token = token;
        console.log(socket.token);
      });
      socket.poll = () => {
        // const playerState = await axios(`${SPOTIFY_ENDPOINT}/me/player`);
        axios(`${SPOTIFY_ENDPOINT}/me/player`, getHeaders(socket.token))
          .then(response => {
            console.log(response.data);
            const playerState = response.data;
            // socket.broadcast.emit('update-input', msg)
            if (!socket.playerState) {
              socket.playerState = playerState;
            }
            setTimeout(socket.poll, 2000);
          })
          .catch(err => {
            console.log(err);
            setTimeout(socket.poll, 2000);
          });
      };
      socket.poll();
    });
  }

  res.end();
}

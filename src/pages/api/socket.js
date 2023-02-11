/* eslint-disable no-lonely-if */
import axios from 'axios';
import { Server } from 'socket.io';
import { getHeaders } from 'src/helpers/helpers';
import { SPOTIFY_BASE_URL } from 'public/constants/pathNames';
import { sortPlayerStateData } from 'src/helpers/helpers';

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log('Socket is already running');
    res.end();
    return;
  }
  console.log('Socket is initializing');
  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  io.on('connection', socket => {
    socket.on('access-token', token => {
      socket.token = token;
      console.log(socket.token);
    });
    socket.poll = () => {
      // first checks for token to avoid calling before the token event
      if (!socket.token) {
        // if no token start from the start again
        setTimeout(socket.poll, 100);
      }
      axios(`${SPOTIFY_BASE_URL}/me/player`, getHeaders(socket.token))
        .then(response => {
          const playerState = sortPlayerStateData(response);
          if (!playerState) {
            // no active player
            if (socket.playerState) {
              socket.playerState = { noActiveDevice: true };
              socket.emit('no-active', socket.playerState);
            }
          } else if (!socket.playerState) {
            // set initial player state and send it to the client
            socket.playerState = playerState;
            socket.emit('initial-state', playerState);
          } else {
            // compare and send updates to the client
            if (socket.playerState.device !== playerState.device) {
              socket.playerState.device = playerState.device;
              socket.emit('device-change', socket.playerState.device);
            }
            if (socket.playerState.uri !== playerState.uri) {
              socket.playerState = playerState;
              socket.emit('track-change', socket.playerState);
            }
            if (socket.playerState.isPlaying !== playerState.isPlaying) {
              socket.playerState.isPlaying = playerState.isPlaying;
              socket.emit('play-status-change', socket.playerState.isPlaying);
            }
          }
          socket.poll();
        })
        .catch(err => {
          console.log(err);
          socket.poll();
        });
    };
    socket.poll();
  });
  res.end();
}

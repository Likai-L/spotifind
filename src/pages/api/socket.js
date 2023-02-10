/* eslint-disable no-lonely-if */
import axios from 'axios';
import { Server } from 'socket.io';
import { getHeaders } from 'src/helpers/profileHelpers';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';
import { sortPlayerStateData } from '@/helpers/socketHelper';

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
      axios(`${SPOTIFY_ENDPOINT}/me/player`, getHeaders(socket.token))
        .then(response => {
          const playerState = sortPlayerStateData(response);
          if (!playerState) {
            console.log('no data came back!');
            // no active player
            if (socket.playerState) {
              socket.playerState = null;
              socket.emit('no-active', null);
            }
          } else if (!socket.playerState) {
            // set initial player state and send it to the client
            socket.playerState = playerState;
            socket.emit('initial-state', playerState);
          } else {
            // compare and send changes to the client
            console.log(socket.playerState.uri);
            console.log(playerState.uri);
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

          setTimeout(socket.poll, 2000);
        })
        .catch(err => {
          console.log(err);
          setTimeout(socket.poll, 2000);
        });
    };
    socket.poll();
  });
  res.end();
}
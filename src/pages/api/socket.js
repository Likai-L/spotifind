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
      socket.poll();
    });
    socket.poll = () => {
      // first checks for token to avoid calling before the token event
      if (!socket.token) {
        // if no token start from the start again
        setTimeout(socket.poll, 100);
        return;
      }
      axios(`${SPOTIFY_BASE_URL}/me/player`, getHeaders(socket.token))
        .then(response => {
          const playerState = sortPlayerStateData(response);

          // if error (status code isn't 200 or 204) try again later
          if (!playerState) {
            setTimeout(socket.poll, 100);
            return;
          }
          // no active player
          if (playerState === 'no-active') {
            // no socket.playerStatue means front end state is still its initial value which is no-active
            // no uir key means it's already no-active state
            if (socket.playerState && socket.playerState.uri) {
              socket.playerState = { noActiveDevice: true };
              console.log('no active device');
              socket.emit('no-active', socket.playerState);
            }
          } else if (!socket.playerState) {
            // set initial player state and send it to the client
            socket.playerState = playerState;
            console.log('initial state');
            socket.emit('initial-state', playerState);
          } else {
            // compare and send updates to the client
            if (socket.playerState.device !== playerState.device) {
              console.log('device change', playerState.device);
              socket.playerState.device = playerState.device;
              socket.emit('device-change', socket.playerState.device);
            }
            if (socket.playerState.uri !== playerState.uri) {
              console.log(
                'uri change',
                socket.playerState.uri,
                '=>',
                playerState.uri
              );
              socket.playerState = playerState;
              socket.emit('track-change', socket.playerState);
            }
            if (socket.playerState.isPlaying !== playerState.isPlaying) {
              socket.playerState.isPlaying = playerState.isPlaying;
              socket.emit('play-status-change', socket.playerState.isPlaying);
            }
          }
          // console.log('1', playerState.name);
          // console.log('2', socket.playerState.name);
          socket.poll();
        })
        .catch(err => {
          console.log(err);
          socket.poll();
        });
    };
  });
  res.end();
}

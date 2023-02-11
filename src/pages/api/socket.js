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
            setTimeout(socket.poll, 1000);
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
              console.log('player status change', playerState.isPlaying);
              socket.emit('play-status-change', socket.playerState.isPlaying);
            }
          }
          // console.log('1', playerState.name);
          // console.log('2', socket.playerState.name);
          setTimeout(socket.poll, 1000); // decrease this to improve responsiveness
          // for casual testing 1-2s is recommended
          // could remove the timeout and call it directly (long polling) when doping a demo
          // 🚨👀 remeber to close the tab/turn off the server when you aren't using because
          // the requests are continuously firing in the background, wasting request chances
        })
        .catch(err => {
          console.log(err);
          setTimeout(socket.poll, 1000);
        });
    };
  });
  res.end();
}

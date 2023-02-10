/* eslint-disable no-lonely-if */
import axios from 'axios';
import { Server } from 'socket.io';
import { getHeaders } from 'src/helpers/profileHelpers';
import { SPOTIFY_ENDPOINT } from 'public/constants/pathNames';
import { sortPlayerStateData } from '@/helpers/socketHelper';

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
            const playerState = sortPlayerStateData(response);
            console.log(playerState);
            // socket.broadcast.emit('update-input', msg)
            if (!socket.playerState) {
              socket.playerState = playerState;
              socket.broadcast.emit('initial-state', playerState);
            } else {
              if (socket.playerState.device !== playerState.device) {
                socket.playerState.device = playerState.device;
                socket.broadcast.emit(
                  'device-change',
                  socket.playerState.device
                );
                if (socket.playerState.uri !== playerState.uri) {
                  socket.playerState.uri = playerState.uri;
                  socket.broadcast.emit('song-change', socket.playerState);
                }
                if (socket.playerState.isPlaying !== playerState.isPlaying) {
                  socket.playerState.isPlaying = playerState.isPlaying;
                  socket.broadcast.emit(
                    'play-status-change',
                    socket.playerState.isPlaying
                  );
                }
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
  }

  res.end();
}

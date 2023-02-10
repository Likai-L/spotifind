import { useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { SOCKET } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';

let socket;

export default function useCurrentTrack() {
  const { credentials, setProfile } = useGlobalContext();

  const initializeSocket = async () => {
    await axios(SOCKET);
    socket = io();

    socket.on('connect', () => {
      console.log('Socket connected');
      socket.emit('access-token', credentials.accessToken);
    });
    socket.on('initial-state', message => {
      console.log('initial-state:', message);
      setProfile(prev => ({ ...prev, playerState: message }));
    });

    socket.on('device-change', message => {
      console.log('device-change:', message);
      setProfile(prev => ({
        ...prev,
        playerState: { ...prev.playerState, device: message }
      }));
    });
    socket.on('track-change', message => {
      console.log('track-change:', message);
      setProfile(prev => ({ ...prev, playerState: message }));
    });
    socket.on('play-status-change', message => {
      console.log('player-status-change:', message);
      setProfile(prev => ({
        ...prev,
        playerState: { ...prev.playerState, isPlaying: message }
      }));
    });
  };
  // establish socket connection
  useEffect(() => {
    initializeSocket();
    return () => {
      socket.disconnect(true);
      console.log('Socket disconnected');
    };
  }, [true]);
}

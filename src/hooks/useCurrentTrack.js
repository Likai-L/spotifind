import { useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { LYRICS, SOCKET } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import { getLyricsFromData } from 'src/helpers/helpers';

let socket;

export default function useCurrentTrack() {
  const { credentials, profile, setProfile } = useGlobalContext();

  const initializeSocket = async () => {
    await axios(SOCKET);
    socket = io();

    socket.on('connect', () => {
      console.log('Socket connected');
      socket.emit('access-token', credentials.accessToken);
    });

    socket.on('no-active', message => {
      console.log('initial-state:', message);
      setProfile(prev => ({ ...prev, playerState: message }));
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

  // fetch lyrics every time current track changes
  useEffect(() => {
    const callLyricsApi = async () => {
      if (!profile.playerState.name || !profile.playerState.artist) {
        setProfile(prev => ({ ...prev, lyrics: {} }));
        return;
      }
      const lyricsData = await axios(LYRICS, {
        params: {
          track: profile.playerState.name,
          artist: profile.playerState.artist
        }
      });
      const lyricsInfo = getLyricsFromData(lyricsData.data);
      setProfile(prev => ({ ...prev, lyrics: lyricsInfo }));
    };
    callLyricsApi();
  }, [profile.playerState.uri]);
}

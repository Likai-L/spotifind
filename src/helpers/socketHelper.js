import { AxiosHeaders } from 'axios';

export const sortPlayerStateData = acxiosRes => {
  if (AxiosHeaders.status !== 200) return null;
  const playerState = acxiosRes.data;
  return {
    device: playerState.device.name,
    uri: playerState.item.id,
    name: playerState.item.name,
    artist: playerState.item.artists[0].name,
    album: playerState.item.album.name,
    albumCoverUrl: playerState.item.album.images[0].url,
    isPlaying: playerState.is_playing
  };
};

/**
 * get the headers object for spotify API calls
 * @param   {{}} accessToken access token from the credentials state
 * @return  {{}}      an object containing request headers to pass in axios API calls as the second argument
 */
export const getHeaders = accessToken => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}}`,
      'Content-Type': 'application/json'
    }
  };
};

/**
 * process top tracks data
 * @param   {[]} tracks array of tracks from the saved tracks
 * @return  {[]}      an array of top tracks with needed info
 */
export const getTracks = tracks => {
  const topTracks = tracks.map(track => {
    return {
      uri: track.track.id,
      trackName: track.track.name,
      artist: track.track.artists[0],
      albumName: track.track.album.name,
      albumCoverUrl: track.track.album.images[0].url,
      spotifyUrl: track.track.external_urls.spotify,
      trackPreview: track.track.preview_url
    };
  });
  return topTracks;
};

/**
 * @param   {[]} tracks array of tracks objects
 * @return  {[]}        array of artist ids
 */
export const getTopArtistIds = (tracks, amount) => {
  const ids = [];

  tracks.slice(0, amount).forEach(track => {
    ids.push(track.artist.id);
  });

  return ids;
};

/**
 * @param   {[]} tracks array of tracks objects
 * @return  {[]}        array of track ids
 */
export const getTopTrackIds = (tracks, amount) => {
  const ids = [];

  tracks.slice(0, amount).forEach(track => {
    ids.push(track.id);
  });

  return ids;
};

export const sortPlayerStateData = axiosRes => {
  if (axiosRes.status === 204) return 'no-active';
  if (axiosRes.status !== 200) return null;
  const playerState = axiosRes.data;

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

export const getLyricsFromData = data => {
  if (data.message.header.status_code !== 200) {
    return {};
  }

  // get lyrics_body, lyrics_copyright, script_tracking_url
  const {
    lyrics_id,
    explicit,
    pixel_tracking_url,
    lyrics_copyright,
    updated_time,
    ...rest
  } = data.message.body.lyrics;
  const lyricsText = rest.lyrics_body;
  let sortedText = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const char of lyricsText) {
    if (char === '*') {
      break;
    }
    sortedText += char;
  }
  sortedText += lyrics_copyright;

  return { ...rest, lyrics_body: sortedText };
};

export const sortLikedTrack = track => {
  return {
    spotifySongUri: track.uri,
    name: track.trackName,
    artist: track.artist.name,
    album: track.albumName
  };
};

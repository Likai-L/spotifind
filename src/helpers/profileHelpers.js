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
 * @param   {[]} tracks array of tracks from the top items endpoint
 * @return  {[]}      an array of top tracks with needed info
 */
export const getTopTracks = tracks => {
  const topTracks = tracks.map(track => {
    return {
      uri: track.id,
      trackName: track.name,
      artist: track.artists[0],
      albumName: track.album.name,
      posterUrl: track.album.images[0].url
    };
  });
  return topTracks;
};

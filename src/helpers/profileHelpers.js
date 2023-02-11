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
      posterUrl: track.track.album.images[0].url
    };
  });
  return topTracks;
};

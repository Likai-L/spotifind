/**
 * process top tracks data
 * @param   {[]} tracks array of tracks from the saved tracks
 * @return  {[]}      an array of top tracks with needed info
 */
export const getSearchResults = tracks => {
  const topResults = tracks.map(track => {
    return {
      uri: track.id,
      trackName: track.name,
      artist: track.artists[0].name,
      albumName: track.album.name,
      posterUrl: track.album.images[0].url
    };
  });
  return topResults;
};

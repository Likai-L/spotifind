/**
 * process search data
 * @param   {[]} tracks array of tracks from the search results
 * @return  {[]}        an array of the top 20 results
 */
export const getSearchResults = tracks => {
  const topResults = tracks.map(track => {
    return {
      uri: track.id,
      trackName: track.name,
      artist: track.artists[0].name,
      albumName: track.album.name,
      albumCoverUrl: track.album.images[0].url
    };
  });
  return topResults;
};

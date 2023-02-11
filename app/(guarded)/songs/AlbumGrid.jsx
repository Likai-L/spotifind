import AlbumTile from './AlbumTile';

export default function AlbumGrid(props) {
  const { tracks } = props;

  return (
    <div className="grid grid-cols-5 relative col-start-1 h-full overflow-y-scroll scrollbar-hide">
      {tracks.map(track => {
        return <AlbumTile key={track.uri} track={track} />;
      })}
    </div>
  );
}

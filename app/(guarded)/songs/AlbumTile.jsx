import { motion as m } from 'framer-motion';
import AlbumCover from '../now-playing/AlbumCover';

export default function AlbumTile({
  track: { albumCoverUrl, trackName, artist, uri }
}) {
  return (
    <div className="flex flex-col items-center font-primary p-8">
      <AlbumCover height={200} src={albumCoverUrl} uri={uri} width={200} />
      <m.p
        animate={{ opacity: 1 }}
        className="font-bold text-2xl text-primary pt-2 pb-1 text-center  line-clamp-2"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}>
        {trackName}
      </m.p>
      <m.p className="font-semibold text-xl text-secondary pst-1 pb-2 text-center">
        {artist}
      </m.p>
    </div>
  );
}

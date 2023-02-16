import Link from 'next/link';
import { SONGS } from 'public/constants/pathNames';
import AlbumCover from '../now-playing/AlbumCover';

export default function SongCard({ track }) {
  const { uri, albumCoverUrl, trackName, artistName, albumName } = track;

  return (
    <Link className="flex shrink-0" href={`${SONGS}/${uri}`}>
      <div className="flex w-full h-full m-auto cursor-pointer">
        <div className="flex shrink-0 sticky max-w-1/5 max-h-5/5 aspect-square m-4 ml-6">
          {albumCoverUrl && (
            <AlbumCover
              alt="album-cover"
              className="rounded-2xl cursor-pointer transition duration-200 ease-out hover:scale-105"
              height={200}
              src={albumCoverUrl}
              uri={uri}
              width={200}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-evenly m-4 mt-1 ml-[2vh] text-[2.3vh] font-semibold">
          <h1>{trackName}</h1>
          <h1 className="text-lg">{artistName}</h1>
          <h1 className="text-secondary text-lg">{albumName}</h1>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { SONGS } from 'public/constants/pathNames';

export default function SongCard({ track }) {
  const { uri, albumCoverUrl, trackName, artistName, albumName } = track;

  return (
    <Link className="flex shrink-0" href={`${SONGS}/${uri}`}>
      <div className="flex w-full h-full m-auto cursor-default">
        <div className="flex shrink-0 sticky max-w-1/5 max-h-5/5 aspect-square m-4 ml-6">
          {albumCoverUrl && (
            <Image
              alt="album-cover"
              className="rounded-2xl"
              height={200}
              src={albumCoverUrl}
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

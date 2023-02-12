import Image from 'next/image';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import LyricsContainer from './LyricsContainer';

export default function SongContainer({ track }) {
  const { albumCoverUrl, trackName, artistName, albumName, lyrics } = track;

  console.log(lyrics);

  return (
    <>
      {/* Body container */}
      <div className="flex justify-evenly">
        {/* album artwork */}
        <div className="flex justify-center items-center w-5/12 h-full">
          <Image
            alt="album artwork"
            className="rounded-3xl m-4"
            height={320}
            src={albumCoverUrl}
            width={320}
          />
        </div>

        {/* Song info and buttons */}
        <div className="flex flex-col justify-center items-center h-full w-7/12 p-4">
          <div className="flex flex-col justify-evenly items-center h-3/4 w-3/4 text-2xl font-semibold m-4">
            <h1>{trackName}</h1>
            <h1>{artistName}</h1>
            <h1>{albumName}</h1>
          </div>
          <div className="flex justify-evenly w-3/4">
            <Button
              addedclasses="text-md rounded-xl w-40"
              content="People"
              path={PEOPLE}
            />
            <Button
              addedclasses="text-md rounded-xl w-40"
              content="Comments"
              path={PEOPLE}
            />
          </div>
        </div>
      </div>
      {/* Song lyrics */}
      <LyricsContainer songLyrics={lyrics} />
    </>
  );
}

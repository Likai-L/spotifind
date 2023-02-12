import Image from 'next/image';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import LyricsContainer from './LyricsContainer';

export default function SongContainer() {
  //   {
  //   albumCoverUrl,
  //   songName,
  //   artistName,
  //   albumName,
  //   songLyrics
  // }

  return (
    <div className="flex flex-col justify-between w-full h-full font-primary bg-primary rounded-3xl px-12 pt-4 cursor-default">
      {/* Body container */}
      <div className="flex justify-evenly">
        {/* album artwork */}
        <div className="flex justify-center items-center w-5/12 h-full">
          <Image
            alt="album artwork"
            className="rounded-3xl m-4"
            height={320}
            src="https://f4.bcbits.com/img/a3610945043_10.jpg"
            width={320}
          />
          {/* src={albumCoverUrl} */}
        </div>

        {/* Song info and buttons */}
        <div className="flex flex-col justify-center items-center h-full w-7/12 p-4">
          <div className="flex flex-col justify-evenly items-center h-3/4 w-3/4 text-2xl font-semibold m-4">
            <h1>Song Name</h1> {/* songName */}
            <h1>Artist Name</h1> {/* artistName */}
            <h1>Album Name</h1> {/* albumName */}
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
      <LyricsContainer /> {/* songLyrics={songLyrics} */}
    </div>
  );
}

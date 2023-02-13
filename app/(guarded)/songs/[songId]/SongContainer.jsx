import Image from 'next/image';
import { useState } from 'react';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import LyricsContainer from './LyricsContainer';

export default function SongContainer({ track }) {
  const { albumCoverUrl, trackName, artistName, albumName, lyrics } = track;
  const [view, setView] = useState('lyrics');

  return (
    <div className="flex justify-evenly font-primary">
      <div className="flex flex-col justify-center items-center w-5/12 h-full ">
        <Image
          alt="album artwork"
          className="rounded-3xl m-4"
          height={320}
          src={albumCoverUrl}
          width={320}
        />
        <div className="flex flex-col justify-evenly items-center h-3/4 w-3/4 text-2xl font-semibold m-4 text-center line-clamp-4">
          <h1 className="p-2">{trackName}</h1>
          <h1 className="p-2 text-secondary text-xl">{artistName}</h1>
          <h1 className="p-2 text-secondary text-lg">{albumName}</h1>
        </div>
        <div className="flex justify-evenly w-3/4 p-2">
          <Button
            addedclasses="text-md rounded-xl w-40"
            content="People"
            path={PEOPLE}
            prefetch="true"
          />
          <Button
            addedclasses="text-md rounded-xl w-40"
            onClick={() => {
              if (view === 'lyrics') {
                setView('comments');
              } else {
                setView('lyrics');
              }
            }}
            content={view === 'lyrics' ? 'Lyrics' : 'Comments'}
            path="#"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center h-full w-7/12 p-4 mt-[-25px]">
        <LyricsContainer songLyrics={lyrics} />
      </div>
    </div>
  );
}

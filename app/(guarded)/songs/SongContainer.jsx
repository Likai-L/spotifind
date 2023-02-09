import Image from 'next/image';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';

export default function SongContainer(/* props */) {
  // const { albumArt, songName, artistName, albumName, songLyrics } = props;

  return (
    <div className="flex flex-col justify-between w-full h-full bg-primary rounded-3xl p-16">
      {/* overall container */}
      <div className="flex justify-center h-full">
        {/* album artwork */}
        <div className="flex justify-center items-center w-5/12 h-2/4 m-1/12">
          <Image
            alt="album art"
            className="rounded-3xl"
            height={300}
            src="https://f4.bcbits.com/img/a3610945043_10.jpg"
            width={300}
          />
        </div>

        {/* Song info and buttons */}
        <div className="flex flex-col justify-center w-7/12 h-2/4 m-1/12">
          <div className="flex flex-col text-xl font-semibold">
            <h1>Song Name</h1>
            <h1>Artist Name</h1>
            <h1>Album Name</h1>
          </div>
          <div className="flex">
            <Button
              addedclasses="text-md rounded-xl"
              content="People"
              path={PEOPLE}
            />
            <Button
              addedclasses="text-md rounded-xl"
              content="Comments"
              path={PEOPLE}
            />
          </div>
        </div>
      </div>
      {/* Song lyrics */}
      <div className="bg-secondary">Lyrics thing</div>
    </div>
  );
}

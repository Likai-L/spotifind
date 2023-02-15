import Image from 'next/image';
import { useState } from 'react';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import LyricsContainer from './LyricsContainer';
import CommentsContainer from './CommentsContainer';
import { useGlobalContext } from 'app/(context)';
import Container from 'app/(container)/Container';

export default function SongContainer({ track }) {
  const { albumCoverUrl, trackName, artistName, albumName, lyrics } = track;
  const [view, setView] = useState('lyrics');
  const { profile } = useGlobalContext();

  return (
    <div className="flex justify-evenly font-primary">
      {view === 'lyrics' && (
        <div className="flex flex-col justify-start items-center w-5/12 h-full  min-h-[800px] mt-[60px]">
          <Image
            alt="album artwork"
            className="rounded-3xl m-4"
            height={320}
            src={albumCoverUrl}
            width={320}
          />
          <div className="flex flex-col justify-evenly items-center h-[150px] w-3/4 text-2xl font-semibold m-4 text-center line-clamp-4">
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
              content={view === 'lyrics' ? 'Comments' : 'Lyrics'}
              onClick={() => {
                if (view === 'lyrics') {
                  setView('comments');
                } else {
                  setView('lyrics');
                }
              }}
              path="#"
            />
          </div>
        </div>
      )}

      {view === 'comments' && (
        <div className="flex flex-col justify-start items-around w-[43%] h-full  min-h-[800px] mt-[60px]">
          <div className="flex justify-center">
            <Image
              alt="album artwork"
              className="rounded-3xl m-4"
              height={230}
              src={albumCoverUrl}
              width={230}
            />
            <div className="flex flex-col justify-evenly items-center w-full text-2xl font-semibold m-4 text-center line-clamp-4">
              <h1 className="p-2">{trackName}</h1>
              <h1 className="p-2 text-secondary text-xl">{artistName}</h1>
              <h1 className="p-2 text-secondary text-lg">{albumName}</h1>
              <div className="flex justify-evenly mt-[40px]">
                <Button
                  addedclasses="text-md rounded-2xl w-[100px]"
                  content="People"
                  path={PEOPLE}
                  prefetch="true"
                />
                <Button
                  addedclasses="text-md rounded-2xl w-[100px]"
                  content={view === 'lyrics' ? 'Comments' : 'Lyrics'}
                  onClick={() => {
                    if (view === 'lyrics') {
                      setView('comments');
                    } else {
                      setView('lyrics');
                    }
                  }}
                  path="#"
                />
              </div>
            </div>
          </div>
          <div className="w-[92%]">
            <Container classNames="bg-container-light w-full h-[240px] mt-[50px]"></Container>
            <div className="flex justify-between w-[85%] mx-auto mt-[30px]">
              <Button
                addedclasses="text-md rounded-2xl w-[100px]"
                content="Post"
                path="#"
                prefetch="true"
              />
              <Button
                addedclasses="text-md rounded-2xl w-[100px]"
                content="Reset"
                path="#"
                prefetch="true"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-start items-center h-full w-[60%] p-4 mt-[-25px]">
        {view === 'lyrics' ? (
          <LyricsContainer songLyrics={lyrics} />
        ) : (
          <CommentsContainer />
        )}
      </div>
    </div>
  );
}

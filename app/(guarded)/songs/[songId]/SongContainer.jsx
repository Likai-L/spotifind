'use client';

import Image from 'next/image';
import Button from 'app/(button)/Button';
import { PEOPLE } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import { useEffect } from 'react';
import LyricsContainer from './LyricsContainer';

export default function SongContainer({ track }) {
  const {
    albumCoverUrl,
    trackName,
    artistName,
    albumName,
    lyrics,
    // spotifyUrl,
    trackPreview
  } = track;

  const { volume, setVolume, setDisplayTrack, audioPreview, setAudioPreview } =
    useGlobalContext();

  // Update state of track as track data loads
  useEffect(() => {
    setAudioPreview({ audio: new Audio(trackPreview) });
  }, [track]);

  useEffect(() => {
    if (audioPreview.audio) {
      audioPreview.audio.volume = volume.finalVolume;
    }
  }, [volume, audioPreview]);

  const playPause = () => {
    const { isPlaying } = volume;

    if (isPlaying) {
      audioPreview.audio.pause();
    } else {
      audioPreview.audio.play();
      setDisplayTrack(track);
    }

    setVolume(prev => ({ ...prev, isPlaying: !isPlaying }));
  };

  useEffect(() => {
    return () => {
      setAudioPreview({});
    };
  }, []);

  return (
    <div className="flex justify-evenly font-primary">
      <div className="flex flex-col justify-center items-center w-5/12 h-full ">
        {albumCoverUrl && (
          <Image
            alt="album artwork"
            className="rounded-3xl m-4"
            height={320}
            onClick={playPause}
            src={albumCoverUrl}
            width={320}
          />
        )}
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
            content="Comments"
            path={PEOPLE}
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center h-full w-7/12 p-4">
        <LyricsContainer songLyrics={lyrics} />
      </div>
    </div>
  );
}

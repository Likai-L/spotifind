'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from 'app/(button)/Button';
import { PEOPLE, SONGS } from 'public/constants/pathNames';
import { useGlobalContext } from 'app/(context)';
import { useEffect } from 'react';
import classNames from 'classnames';
import LyricsContainer from './LyricsContainer';
import CommentsContainer from './CommentsContainer';
import CommentForm from './CommentForm';
import { useAsyncFn } from '@/hooks/useAsync';
import { createComment } from '@/helpers/comments';

export default function SongContainer({ track }) {
  const {
    albumCoverUrl,
    trackName,
    artistName,
    albumName,
    lyrics,
    spotifyUrl,
    trackPreview,
    uri
  } = track;

  const { volume, setVolume, setDisplayTrack, audioPreview, setAudioPreview, setComments, profile } =
    useGlobalContext();
  const [view, setView] = useState('lyrics');

  // Update state of track as track data loads
  useEffect(() => {
    setAudioPreview({ audio: new Audio(trackPreview) });
  }, [trackPreview]);

  // Set volume to match global volume bar once audio is loaded
  useEffect(() => {
    if (audioPreview.audio) {
      audioPreview.audio.volume = volume.finalVolume;
    }
  }, [volume, audioPreview]);

  const playPause = e => {
    e.preventDefault();
    const { isPlaying } = volume;

    if (audioPreview.audio) {
      if (isPlaying) {
        audioPreview.audio.pause();
      } else {
        audioPreview.audio.play();
        setDisplayTrack(track);
      }
    }

    setVolume(prev => ({ ...prev, isPlaying: !isPlaying }));
  };

  // Stop playback when leaving component
  useEffect(() => {
    return () => {
      setVolume(prev => ({ ...prev, isPlaying: false }));
    };
  }, []);

  const playIconClasses = classNames(
    'play-button inline-block fade-in hover:animate-pulse',
    {
      paused: volume.isPlaying
    }
  );

  const {
    error,
    loading,
    execute: createCommentFn
  } = useAsyncFn(createComment);
  const onCreateComment = content => {
    // returned from useAsyncFn, it calls createComment and keeps track of the request loading status and results
    return createCommentFn({
      songUri: track.uri,
      authorUri: profile.uri,
      content,
      track
    }).then(comment => {
      setComments(prev => {
        return [comment, ...prev];
      });
    });
  };

  return (
    <div className="flex justify-evenly font-primary fade-in">
      {view === 'lyrics' && (
        <div className="flex flex-col justify-start items-center w-5/12 h-full min-h-[800px] mt-[60px]">
          {albumCoverUrl && (
            <>
              <Image
                alt="album artwork"
                className="rounded-3xl m-4"
                height={320}
                src={albumCoverUrl}
                width={320}
              />
              <div className="flex justify-evenly w-3/4">
                <Button
                  addedclasses="text-md rounded-xl w-40"
                  content={
                    <span>
                      <span className={playIconClasses} /> Preview
                    </span>
                  }
                  onClick={playPause}
                  path={SONGS}
                  prefetch="true"
                  type="button"
                />
                <Button
                  addedclasses="text-md rounded-xl w-48"
                  content="Open in Spotify"
                  path={spotifyUrl || `/songs/${uri}`}
                  prefetch="true"
                  target="_blank"
                />
              </div>
            </>
          )}
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
          <CommentForm
            error={error}
            loading={loading}
            onSubmit={onCreateComment}
          />
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

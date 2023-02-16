'use client';

import { useEffect } from 'react';
import { useGlobalContext } from 'app/(context)';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

export default function VolumeBar() {
  const { volume, setVolume, audioPreview } = useGlobalContext();

  const toggleMute = e => {
    e.preventDefault();
    setVolume(prev => ({ ...prev, muted: !prev.muted }));

    // Set back to default value of 0.1 on click if bar was dragged to 0.
    if (volume.volume === 0) {
      setVolume(prev => ({
        ...prev,
        muted: false,
        volume: 0.1,
        finalVolume: 0.1
      }));
    }
  };

  // Set finalVolume depending on mute state
  useEffect(() => {
    if (volume.muted) {
      setVolume(prev => ({ ...prev, finalVolume: 0 }));
    }
    if (!volume.muted) {
      setVolume(prev => ({ ...prev, finalVolume: prev.volume }));
    }
  }, [volume.muted]);

  const changeVolume = e => {
    let isMuted = false;

    if (e.target.valueAsNumber === 0) {
      isMuted = true;
    }

    setVolume(prev => ({
      ...prev,
      volume: e.target.valueAsNumber,
      finalVolume: e.target.valueAsNumber,
      muted: isMuted
    }));
  };

  useEffect(() => {
    if (
      !volume.isPlaying &&
      audioPreview.audio?.currentTime > 0 &&
      !audioPreview.audio?.ended
    ) {
      audioPreview.audio.pause();
    }
  }, [volume.isPlaying]);

  return (
    <div className="flex justify-evenly font-primary text-nav mb-44">
      {volume.finalVolume === 0 ? (
        <FontAwesomeIcon
          className="ml-8 cursor-pointer hover:animate-pulse"
          icon={faVolumeXmark}
          onClick={toggleMute}
          style={{ fontSize: 21 }}
        />
      ) : (
        <FontAwesomeIcon
          className="ml-8 cursor-pointer hover:animate-pulse"
          icon={faVolumeHigh}
          onClick={toggleMute}
          style={{ fontSize: 21 }}
        />
      )}
      <input
        className="mr-8 cursor-ew-resize"
        max={1}
        min={0}
        onChange={changeVolume}
        step={0.05}
        type="range"
        value={volume.finalVolume}
      />
    </div>
  );
}

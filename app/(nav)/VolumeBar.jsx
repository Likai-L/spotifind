'use client';

import { useEffect } from 'react';
import { useGlobalContext } from 'app/(context)';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

export default function VolumeBar() {
  const { volume, setVolume } = useGlobalContext();

  const toggleMute = e => {
    e.preventDefault();
    setVolume(prev => ({ ...prev, muted: !prev.muted }));

    // Set back to default value of 0.25 on click if bar was dragged to 0.
    if (volume.volume === 0) {
      setVolume(prev => ({
        ...prev,
        muted: false,
        volume: 0.25,
        finalVolume: 0.25
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

  return (
    <div className="flex justify-between font-primary text-nav mb-44">
      {volume.finalVolume === 0 ? (
        <FontAwesomeIcon
          className="ml-12 cursor-pointer hover:animate-pulse"
          icon={faVolumeXmark}
          onClick={toggleMute}
          style={{ fontSize: 22 }}
        />
      ) : (
        <FontAwesomeIcon
          className="ml-12 cursor-pointer hover:animate-pulse"
          icon={faVolumeHigh}
          onClick={toggleMute}
          style={{ fontSize: 22 }}
        />
      )}
      <input
        className="mr-10 cursor-ew-resize"
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

'use client';

import { useEffect } from 'react';

const { useGlobalContext } = require('app/(context)');

export default function VolumeBar() {
  const { volume, setVolume } = useGlobalContext();

  const toggleMute = e => {
    e.preventDefault();
    setVolume(prev => ({ ...prev, muted: !prev.muted }));
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
    setVolume(prev => ({
      ...prev,
      volume: e.target.valueAsNumber,
      finalVolume: e.target.valueAsNumber
    }));
  };

  return (
    <div className="flex flex-col justify-between items-center font-primary text-nav">
      <input
        className="mx-8"
        max={1}
        min={0}
        onChange={changeVolume}
        step={0.05}
        type="range"
        value={volume.muted ? 0 : volume.volume}
      />
      <button className="mx-8" onClick={toggleMute} type="button">
        {volume.muted ? 'Muted' : 'Unmuted'}
      </button>
    </div>
  );
}

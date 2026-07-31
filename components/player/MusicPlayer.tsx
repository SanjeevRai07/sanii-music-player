"use client";

import { useCallback } from "react";

import YouTubePlayer from "./YouTubePlayer";

import { usePlayerStore } from "@/store/playerStore";

import {
  Heart,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

export default function MusicPlayer() {
  const {
  songs,
  currentSong,
  player,
  isPlaying,
  volume,
  setVolume,
  setCurrentSong,
  setIsPlaying,
} = usePlayerStore();

const togglePlay = useCallback(() => {
  if (!player) return;

  if (isPlaying) {
    player.pauseVideo();
    setIsPlaying(false);
  } else {
    player.playVideo();
    setIsPlaying(true);
  }
}, [player, isPlaying]);

const nextSong = () => {
  if (!currentSong) return;

  const index = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  if (index === -1) return;

  const next = songs[(index + 1) % songs.length];

  setCurrentSong(next);
};

const prevSong = () => {
  if (!currentSong) return;

  const index = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  if (index === -1) return;

  const prev =
    songs[(index - 1 + songs.length) % songs.length];

  setCurrentSong(prev);
};

const handleVolume = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const value = Number(e.target.value);

  setVolume(value);

  if (player) {
    player.setVolume(value);
  }
};

  return (
    <>
      {/* Hidden YouTube Player */}
      <YouTubePlayer />

      <div className="fixed bottom-0 left-72 right-0 z-50 flex h-24 items-center justify-between border-t border-zinc-800 bg-black/90 px-8 backdrop-blur-xl">

        {/* Left */}
        <div className="flex w-80 items-center gap-4">

          <img
            src={
              currentSong?.thumbnail ||
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
            }
            alt="Song"
            className="h-16 w-16 rounded-xl object-cover"
          />

          <div className="overflow-hidden">

            <h3 className="truncate font-semibold text-white">
              {currentSong?.title || "Search a song"}
            </h3>

            <p className="truncate text-sm text-zinc-400">
              {currentSong?.artist || "No Artist"}
            </p>

          </div>

          <Heart
            size={20}
            className="cursor-pointer text-zinc-500 hover:text-pink-500"
          />

        </div>

        {/* Center */}

        <div className="flex flex-col items-center gap-3">

          <div className="flex items-center gap-6">

           <SkipBack
  size={22}
  onClick={prevSong}
  className="cursor-pointer text-zinc-400 hover:text-white"
/>

           <button
  onClick={togglePlay}
  className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500"
>

              {isPlaying ? (
  <Pause fill="white" size={22} />
) : (
  <Play fill="white" size={22} />
)}

            </button>

           <SkipForward
  size={22}
  onClick={nextSong}
  className="cursor-pointer text-zinc-400 hover:text-white"
/>
          </div>

          <input
  type="range"
  min={0}
  max={100}
  value={volume}
  onChange={handleVolume}
  className="w-full accent-pink-500"
/>

        </div>

        {/* Right */}

        <div className="flex w-60 items-center gap-3">

          <Volume2 size={20} />

          <div className="h-1 flex-1 rounded-full bg-zinc-700">

            <div className="h-1 w-2/3 rounded-full bg-pink-500"></div>

          </div>

        </div>

      </div>
    </>
  );
}
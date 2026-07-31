import { create } from "zustand";
import type { YouTubePlayer } from "react-youtube";

export interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
}

interface PlayerStore {
  songs: Song[];
  currentSong: Song | null;

  player: YouTubePlayer | null;
  isPlaying: boolean;
  volume: number;

  setSongs: (songs: Song[]) => void;
  setCurrentSong: (song: Song) => void;

  setPlayer: (player: YouTubePlayer) => void;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  songs: [],
  currentSong: null,

  player: null,
  isPlaying: false,
  volume: 100,

  setSongs: (songs) =>
    set({
      songs,
      currentSong: songs.length ? songs[0] : null,
    }),

  setCurrentSong: (song) =>
    set({
      currentSong: song,
      isPlaying: true,
    }),

  setPlayer: (player) =>
    set({
      player,
    }),

  setIsPlaying: (playing) =>
    set({
      isPlaying: playing,
    }),

  setVolume: (volume) =>
    set({
      volume,
    }),
}));
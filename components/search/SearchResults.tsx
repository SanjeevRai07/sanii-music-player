"use client";

import TrendingCard from "../cards/TrendingCard";
import { usePlayerStore } from "@/store/playerStore";

export default function SearchResults() {
  const { songs } = usePlayerStore();

  if (songs.length === 0) return null;

  return (
    <div className="w-[30%] h-[75vh] overflow-y-auto rounded-2xl bg-zinc-900 p-5">
      <h2 className="mb-5 text-2xl font-bold">
        Search Results
      </h2>

      <div className="space-y-4">
        {songs.map((song) => (
          <TrendingCard
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            image={song.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import { Heart, Play, Clock3 } from "lucide-react";
import { usePlayerStore } from "@/store/playerStore";

interface Props {
  id?: string;
  title: string;
  artist: string;
  image: string;
}

export default function TrendingCard({
  id = "",
  title,
  artist,
  image,
}: Props) {
  const { setCurrentSong } = usePlayerStore();

  return (
    <div
      onClick={() =>
        setCurrentSong({
          id,
          title,
          artist,
          thumbnail: image,
        })
      }
      className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(236,72,153,.35)]"
    >
      {/* Album Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70"></div>

        <button className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
          <Play size={20} fill="white" />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-bold text-white">
          {title}
        </h2>

        <p className="text-zinc-400">
          {artist}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Clock3 size={15} />
            YouTube
          </div>

          <Heart
            size={20}
            className="cursor-pointer text-zinc-500 transition hover:fill-pink-500 hover:text-pink-500"
          />
        </div>
      </div>
    </div>
  );
}
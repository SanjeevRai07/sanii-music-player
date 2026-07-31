"use client";

import { Heart, Play } from "lucide-react";

const songs = [
  {
    title: "Starboy",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=500",
  },
];

export default function LikedSongs() {
  return (
    <section className="mt-20">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-4xl font-bold">
          ❤️ Liked Songs
        </h2>

        <button className="text-pink-500 hover:text-pink-300">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {songs.map((song, i) => (

          <div
            key={i}
            className="flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-pink-500 hover:bg-zinc-900"
          >

            <div className="flex items-center gap-5">

              <img
                src={song.image}
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div>

                <h3 className="text-xl font-bold">
                  {song.title}
                </h3>

                <p className="text-zinc-400">
                  {song.artist}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <Heart
                className="cursor-pointer text-pink-500"
                fill="#EC4899"
              />

              <button className="rounded-full bg-pink-500 p-3 hover:scale-110 transition">

                <Play
                  size={18}
                  fill="white"
                />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
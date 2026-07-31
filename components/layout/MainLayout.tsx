"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MusicPlayer from "../player/MusicPlayer";
import TrendingCard from "../cards/TrendingCard";
import Hero from "../hero/hero";
import LikedSongs from "../liked/LikedSongs";
import YouTubePlayer from "../player/YouTubePlayer";

import { usePlayerStore } from "@/store/playerStore";

export default function MainLayout() {
  const { songs } = usePlayerStore();

  return (
    <div className="flex h-screen bg-[#09090B] text-white overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto px-8 py-6 pb-40">

          {/* Home Screen */}
          {songs.length === 0 && (
            <>
              <Hero />

              <section className="mt-12">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-4xl font-bold">
                    🔥 Trending Songs
                  </h2>

                  <button className="rounded-full border border-pink-500 px-5 py-2 text-pink-400 hover:bg-pink-500 hover:text-white">
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                  <TrendingCard
                    title="Blinding Lights"
                    artist="The Weeknd"
                    image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
                  />

                  <TrendingCard
                    title="Shape of You"
                    artist="Ed Sheeran"
                    image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500"
                  />

                  <TrendingCard
                    title="Believer"
                    artist="Imagine Dragons"
                    image="https://images.unsplash.com/photo-1501612780327-45045538702b?w=500"
                  />

                  <TrendingCard
                    title="Perfect"
                    artist="Ed Sheeran"
                    image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500"
                  />
                </div>
              </section>

              <LikedSongs />
            </>
          )}

          {/* Search Results */}
          {songs.length > 0 && (
            <div className="flex gap-8 h-[75vh]">

              {/* Left Side */}
             <div className="w-[30%] overflow-y-auto rounded-2xl bg-zinc-900 p-5">

                <h2 className="mb-5 text-2xl font-bold">
                  🎵 Search Results
                </h2>

                <div className="space-y-5">
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

              {/* Right Side */}
              <div className="flex-[2] h-[75vh] rounded-2xl overflow-hidden bg-black">
  <YouTubePlayer />
</div>

            </div>
          )}

        </main>

        <MusicPlayer />
      </div>
    </div>
  );
}
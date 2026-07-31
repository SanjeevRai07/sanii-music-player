"use client";

import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 p-14">

      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10">

        <p className="text-lg text-pink-100">
          Welcome Back 👋
        </p>

        <h1 className="mt-4 text-7xl font-black leading-none">
          ♪ Sanii
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-pink-50">
          Feel Every Beat.
          Discover millions of songs with a premium music experience.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">

            <Play size={20} />

            Start Listening

          </button>

          <button className="rounded-full border border-white/40 px-8 py-4 transition hover:bg-white/10">
            Browse Music
          </button>

        </div>

      </div>

    </section>
  );
}
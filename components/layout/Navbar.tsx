"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  Settings,
  UserCircle2,
} from "lucide-react";

import { searchSongs } from "@/services/youtube";
import { usePlayerStore } from "@/store/playerStore";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const { setSongs } = usePlayerStore();

  const handleSearch = async (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  if (e.key !== "Enter") return;

  try {
   const songs = await searchSongs(query);

setSongs(songs);

      console.log(songs);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="sticky top-0 z-40 h-24 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-10">

        {/* Search */}

        <div className="flex w-[520px] items-center rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4">

          <Search
            size={22}
            className="text-zinc-500"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search Songs, Artists, Albums..."
            className="ml-4 w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="rounded-full bg-zinc-900 p-3 hover:bg-pink-500 transition">
            <Bell size={20} />
          </button>

          <button className="rounded-full bg-zinc-900 p-3 hover:bg-pink-500 transition">
            <Settings size={20} />
          </button>

          <button className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-2 hover:bg-pink-500 transition">
            <UserCircle2 size={24} />
            <span>Sanjeev</span>
          </button>

        </div>

      </div>
    </header>
  );
}
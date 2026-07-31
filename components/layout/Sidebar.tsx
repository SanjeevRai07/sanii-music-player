"use client";

import {
  Home,
  Search,
  Library,
  Heart,
  Music2,
  Disc3,
  User2,
  Download,
  Settings,
} from "lucide-react";

const menu = [
  { icon: Home, text: "Home" },
  { icon: Search, text: "Discover" },
  { icon: Music2, text: "Songs" },
  { icon: Disc3, text: "Albums" },
  { icon: User2, text: "Artists" },
  { icon: Heart, text: "Liked Songs" },
  { icon: Library, text: "Playlists" },
  { icon: Download, text: "Downloads" },
  { icon: Settings, text: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 shrink-0 h-screen bg-[#0B0B0D] border-r border-zinc-800 flex flex-col">

      <div className="px-8 py-8">

        <h1 className="text-4xl font-black text-pink-500">
          ♪ Sanii
        </h1>

        <p className="text-zinc-500 mt-2">
          Feel Every Beat
        </p>

      </div>

      <nav className="flex-1 px-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.text}
              className="group mb-2 flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-pink-500 hover:text-white"
            >
              <Icon size={22} />

              <span>{item.text}</span>

            </button>
          );
        })}

      </nav>

      <div className="m-5 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-6">

        <h2 className="text-xl font-bold">
          Premium
        </h2>

        <p className="mt-2 text-sm text-pink-100">
          Unlimited Streaming
        </p>

        <button className="mt-5 w-full rounded-xl bg-white py-3 font-bold text-black">
          Upgrade
        </button>

      </div>

    </aside>
  );
}
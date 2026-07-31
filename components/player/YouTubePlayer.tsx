"use client";

import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { usePlayerStore } from "@/store/playerStore";

export default function YouTubePlayer() {
  const {
    currentSong,
    setPlayer,
    setIsPlaying,
    volume,
  } = usePlayerStore();

  if (!currentSong) return null;

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onReady = (event: YouTubeEvent) => {
  const ytPlayer = event.target;

  // Purana player stop karo
  ytPlayer.stopVideo();

  setPlayer(ytPlayer);

  ytPlayer.unMute();
  ytPlayer.setVolume(volume);

  setTimeout(() => {
    ytPlayer.playVideo();
  }, 300);
};
  const onStateChange = (event: YouTubeEvent) => {
    if (event.data === 1) setIsPlaying(true);
    if (event.data === 2) setIsPlaying(false);
  };

  return (
    <div className="w-full h-full">
      <YouTube
        videoId={currentSong.id}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
        iframeClassName="w-full h-full rounded-2xl"
        className="w-full h-full"
      />
    </div>
  );
}
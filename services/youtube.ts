const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function searchSongs(query: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=10&q=${encodeURIComponent(
      query
    )}&key=${API_KEY}`
  );

  const data = await response.json();

  console.log("YouTube Response:", data);

  if (!data.items) {
    console.error("YouTube API Error:", data);
    return [];
  }

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    thumbnail:
      item.snippet.thumbnails.high?.url ||
      item.snippet.thumbnails.medium?.url ||
      item.snippet.thumbnails.default?.url,
  }));
}
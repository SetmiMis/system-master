export type Video = { id: string; title: string };

const CHANNEL = "UCifLzvHmGpLY0whaRTxqD6Q"; // youtube.com/@SetmiIndia

// Public channel RSS, hourly refresh; empty on any failure so the section just hides.
export async function getVideos(limit = 6): Promise<Video[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<entry>")
      .slice(1, limit + 1)
      .flatMap((e) => {
        const id = e.match(/<yt:videoId>([^<]+)</)?.[1];
        const title = e.match(/<title>([^<]+)</)?.[1];
        return id && title ? [{ id, title: title.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"') }] : [];
      });
  } catch {
    return [];
  }
}

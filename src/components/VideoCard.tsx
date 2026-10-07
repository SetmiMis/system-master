"use client";

import { useState } from "react";

export function VideoCard({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-panel-line bg-bg-elevated">
      <div className="relative aspect-video bg-black">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlay(true)} aria-label={`Play: ${title}`} className="group absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`Video thumbnail: ${title}`} loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-accent-strong shadow-lg transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4 text-[0.9rem] font-semibold leading-snug">{title}</div>
    </div>
  );
}

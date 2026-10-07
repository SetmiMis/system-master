"use client";

import { useEffect, useRef, useState } from "react";

type Photo = { id: string; w: number; h: number };

export function ExpoGallery({ photos }: { photos: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const step = (d: number) => setOpen((o) => (o === null ? o : (o + d + photos.length) % photos.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const cur = open === null ? null : photos[open];

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {photos.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => show(i)}
            aria-label={`Open expo photo ${i + 1} of ${photos.length}`}
            className="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-xl border border-panel-line bg-bg-elevated sm:mb-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/expo/expo-${p.id}-s.webp`}
              alt="Setmi India stall at an industry expo"
              width={p.w}
              height={p.h}
              loading="lazy"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="zoomable-dialog max-h-[94vh] max-w-[96vw] rounded-xl bg-transparent p-0"
      >
        {cur && (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/expo/expo-${cur.id}.webp`} alt="Setmi India stall at an industry expo" className="block max-h-[88vh] max-w-[92vw] rounded-xl object-contain" />
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
            </button>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80">‹</button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80">›</button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-data text-[0.72rem] text-white">
              {(open ?? 0) + 1} / {photos.length}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";

export function ZoomableImage({
  src,
  alt,
  sizes,
  className,
  style,
  priority,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Image src={src} alt={alt} fill sizes={sizes} className={className} style={style} priority={priority} />
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`View larger: ${alt}`}
        className="absolute inset-0 cursor-zoom-in"
      />
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="zoomable-dialog max-h-[92vh] max-w-[92vw] rounded-xl bg-transparent p-0"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="block max-h-[92vh] max-w-[92vw] rounded-xl object-contain" />
        </div>
      </dialog>
    </>
  );
}

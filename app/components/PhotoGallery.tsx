'use client';

import { useState } from 'react';
import Image from 'next/image';

type PhotoGalleryProps = {
  photos: string[];
  title?: string;
};

export default function PhotoGallery({ photos, title = 'Photo gallery' }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => {
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  return (
    <>
      <section aria-label={title} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => openPhoto(index)}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-72 w-full">
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
            </div>
          </button>
        ))}
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closePhoto}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePhoto}
              className="absolute right-2 top-2 z-20 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow hover:bg-white"
            >
              ✕
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold text-gray-800 shadow hover:bg-white"
              aria-label="Previous photo"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold text-gray-800 shadow hover:bg-white"
              aria-label="Next photo"
            >
              ›
            </button>

            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <Image
                src={photos[selectedIndex]}
                alt={`Large gallery photo ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-4 text-center text-sm text-white">
              Photo {selectedIndex + 1} of {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
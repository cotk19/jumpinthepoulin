import fs from 'fs';
import path from 'path';
import PhotoGallery from '@/app/components/PhotoGallery';

export default function Scotland2025Page() {
  const folder = path.join(process.cwd(), 'public/images/scotland-2025/full');

  const files = fs
    .readdirSync(folder)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  const photos = files.map((file) => `/images/scotland-2025/full/${file}`);

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Travel Log
        </p>
        <h1 className="mt-2 text-4xl font-bold text-blue-800">Scotland 2025</h1>
        <p className="mt-4 max-w-3xl text-gray-600">
          A gallery of some of our favorite moments from Scotland — city walks,
          beautiful views, and memories we want to keep.
        </p>
      </section>

      <PhotoGallery photos={photos} title="Scotland 2025 photo gallery" />
    </div>
  );
}
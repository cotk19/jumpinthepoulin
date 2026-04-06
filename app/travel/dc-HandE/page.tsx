import fs from 'fs';
import path from 'path';
import PhotoGallery from '@/app/components/PhotoGallery';

export default function dcHandEPage() {
  const folder = path.join(process.cwd(), 'public/images/dc-HandE/full');

  const files = fs
    .readdirSync(folder)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  const photos = files.map((file) => `/images/dc-HandE/full/${file}`);

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Travel Log
        </p>
        <h1 className="mt-2 text-4xl font-bold text-blue-800">Washington D.C.</h1>
        <p className="mt-4 max-w-3xl text-gray-600">
          A gallery of some of Hayden and Elise's trips to Washington D.C.
        </p>
      </section>

      <PhotoGallery photos={photos} title="DC photo gallery" />
    </div>
  );
}
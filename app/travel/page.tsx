import Link from 'next/link';

const trips = [
  {
    title: 'Scotland 2025',
    slug: 'scotland-2025',
    description: 'Castles, cobblestone streets, Highland views, and great memories.',
    coverImage: '/images/scotland-2025/full/ed_castle_jw.webp',
  },
  {
    title: 'Washington D.C.',
    slug: 'dc-HandE',
    description: 'A few moments from Hayden and Elise\'s D.C. trips.',
    coverImage: '/images/dc-HandE/full/wash2.webp',
  },
];

export default function TravelPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-blue-800">Travel Log</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          A collection of our family trips, favorite memories, and photo galleries.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <Link
            key={trip.slug}
            href={`/travel/${trip.slug}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-52 bg-gray-200">
              <img
                src={trip.coverImage}
                alt={trip.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-700">{trip.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {trip.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
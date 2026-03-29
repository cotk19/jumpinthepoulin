import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-gradient-to-r from-blue-400 to-blue-200 px-8 py-16 text-white shadow-lg">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Welcome to our family site
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Jump In The Poulin
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-50">
            A place for our family memories, favorite recipes, travel adventures,
            and all the fun of just Poulin around.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/travel"
              className="rounded-md bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Explore Travel
            </Link>

            <Link
              href="/recipes"
              className="rounded-md border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-700">Our little corner of the internet</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            This site is where we can keep track of the places we’ve gone, the
            meals we love, and the family moments we want to remember.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            It’s part scrapbook, part cookbook, and part family joke board —
            all in one place.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <Image
            src="/images/Family-fun.jpg"
            alt="Poulin family featured memory"
            width={900}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-blue-700">Start exploring</h2>
          <p className="mt-2 text-gray-600">
            Jump into the parts of the site that matter most to us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/travel"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-3xl">✈️</div>
            <h3 className="mt-4 text-xl font-semibold text-blue-700 group-hover:text-blue-800">
              Travel Log
            </h3>
            <p className="mt-2 text-gray-600">
              Photos, stories, and favorite memories from trips we’ve taken.
            </p>
          </Link>

          <Link
            href="/recipes"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-3xl">🍲</div>
            <h3 className="mt-4 text-xl font-semibold text-blue-700 group-hover:text-blue-800">
              Family Cookbook
            </h3>
            <p className="mt-2 text-gray-600">
              The meals, desserts, and comfort foods we want to keep around.
            </p>
          </Link>

          <Link
            href="/just-poulin-around"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-3xl">😄</div>
            <h3 className="mt-4 text-xl font-semibold text-blue-700 group-hover:text-blue-800">
              Just Poulin Around
            </h3>
            <p className="mt-2 text-gray-600">
              Family jokes, random moments, memes, and the fun stuff.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
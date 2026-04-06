import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl border border-white/20 bg-gradient-to-r from-mist-500/60 to-mist-300/60 px-8 py-16 text-white shadow-lg backdrop-blur-sm">
        <div className="max-w-3xl">
          <p className="mb-3 text-lg font-bold uppercase tracking-[0.2em] text-white/90">
            Welcome to our family site
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Jump In The Poulin
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
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

      <section className="grid gap-8 overflow-hidden rounded-2xl bg-white/65/70 p-6 shadow-lg backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist-700">
            Our family
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-700">
            A few of our favorite moments, all in one place
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            This is our little corner of the internet for the trips we’ve taken,
            the meals we love, and the memories we want to keep close.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Part scrapbook, part cookbook, and part family joke board — built a
            little at a time and made to feel like us.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/poulinfam.webp"
              alt="Poulin family featured memory"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-blue-700">Start exploring</h2>
          <p className="mt-2 text-gray-700">
            Jump into the parts of the site that matter most to us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/travel"
            className="group rounded-2xl bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
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
            className="group rounded-2xl bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
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
            className="group rounded-2xl bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
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
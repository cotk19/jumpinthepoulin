'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `block transition ${
      pathname === path
        ? 'text-yellow-300 font-semibold'
        : 'hover:text-blue-100'
    }`;

  const mobileLinkClass = (path: string) =>
    `block rounded px-3 py-2 transition ${
      pathname === path
        ? 'bg-blue-500 text-yellow-300 font-semibold'
        : 'hover:bg-blue-500'
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wide group">
            <div className="bg-white text-blue-600 px-2 py-1 rounded shadow group-hover:scale-105 transition">
              🏊
            </div>
            <span className="group-hover:text-blue-100 transition">
              JumpInThePoulin
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <Link href="/" className={linkClass('/')} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/travel"
              className={linkClass('/travel')}
              onClick={() => setMenuOpen(false)}
            >
              Travel
            </Link>
            <Link
              href="/recipes"
              className={linkClass('/recipes')}
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/just-poulin-around"
              className={linkClass('/just-poulin-around')}
              onClick={() => setMenuOpen(false)}
            >
              Just Poulin Around
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 md:block">
            Sign In
          </button>

          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-blue-500 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-blue-500 bg-blue-600 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2 text-base">
            <Link href="/" className={mobileLinkClass('/')} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/travel"
              className={mobileLinkClass('/travel')}
              onClick={() => setMenuOpen(false)}
            >
              Travel
            </Link>
            <Link
              href="/recipes"
              className={mobileLinkClass('/recipes')}
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/just-poulin-around"
              className={mobileLinkClass('/just-poulin-around')}
              onClick={() => setMenuOpen(false)}
            >
              Just Poulin Around
            </Link>

            <button className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
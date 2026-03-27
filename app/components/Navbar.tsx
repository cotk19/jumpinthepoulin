'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? 'text-yellow-300 font-semibold'
        : 'hover:text-blue-100'
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-blue-500 bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Left side */}
        <div className="flex items-center gap-8">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-wide transition hover:text-blue-100"
          >
            <span className="text-2xl">🏊</span>
            <span>JumpInThePoulin</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="/travel" className={linkClass('/travel')}>
              Travel
            </Link>
            <Link href="/recipes" className={linkClass('/recipes')}>
              Recipes
            </Link>
            <Link
              href="/just-poulin-around"
              className={linkClass('/just-poulin-around')}
            >
              Just Poulin Around
            </Link>
          </div>
        </div>

        {/* Right side */}
        <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
          Sign In
        </button>
      </div>
    </nav>
  );
}
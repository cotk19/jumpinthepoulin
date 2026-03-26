import './globals.css';
import Link from 'next/link';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-lg">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="hover:underline font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/travel" className="hover:underline font-semibold">
                Travel
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="hover:underline font-semibold">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/just-poulin-around" className="hover:underline font-semibold">
                Just Poulin Around
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="p-8 max-w-6xl mx-auto">{children}</main>

        {/* Footer */}
        <footer className="text-center mt-10 p-4 border-t border-gray-300 text-gray-600">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>
      </body>
    </html>
  );
}
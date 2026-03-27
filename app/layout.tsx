import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        
        {/* Navbar */}
        <nav className="bg-blue-600 text-white shadow border-b border-blue-500">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">

              {/* Left side: Logo + Links */}
              <div className="flex items-center space-x-8">
                
                {/* Logo */}
                <Link href="/" className="text-xl font-bold whitespace-nowrap">
                  🏊 JumpInThePoulin
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="hover:text-gray-200">
                    Home
                  </Link>
                  <Link href="/travel" className="hover:text-gray-200">
                    Travel
                  </Link>
                  <Link href="/recipes" className="hover:text-gray-200">
                    Recipes
                  </Link>
                  <Link href="/just-poulin-around" className="hover:text-gray-200">
                    Just Poulin Around
                  </Link>
                </div>
              </div>

              {/* Right side: Sign In */}
              <div>
                <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 transition">
                  Sign In
                </button>
              </div>

            </div>
          </div>
        </nav>

        {/* Page content */}
        <main className="p-8 max-w-6xl mx-auto">{children}</main>

        {/* Footer */}
        <footer className="text-center mt-10 p-4 border-t border-gray-300 text-gray-600">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>

      </body>
    </html>
  );
}
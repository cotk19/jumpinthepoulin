import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-gray-50 text-gray-800">
        <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6 sticky top-0 z-10 shadow-lg">
          <Link href="/" className="hover:underline font-semibold">Home</Link>
          <Link href="/travel" className="hover:underline font-semibold">Travel</Link>
          <Link href="/recipes" className="hover:underline font-semibold">Recipes</Link>
          <Link href="/just-poulin-around" className="hover:underline font-semibold">Just Poulin Around</Link>
        </nav>
        <main className="p-8 max-w-6xl mx-auto">{children}</main>
        <footer className="text-center mt-10 p-4 border-t border-gray-300 text-gray-600">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>
      </body>
    </html>
  );
}
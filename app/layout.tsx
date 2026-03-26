import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="font-sans">
        <nav className="bg-blue-500 p-4 text-white flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/just-poulin-around">Just Poulin Around</Link>
        </nav>
        <main className="p-10">{children}</main>
        <footer className="text-center mt-10 p-4 border-t">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>
      </body>
    </html>
  );
}
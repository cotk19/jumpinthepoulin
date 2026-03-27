import './globals.css';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="mt-12 border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>
      </body>
    </html>
  );
}
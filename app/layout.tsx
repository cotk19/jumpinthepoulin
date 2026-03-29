import './globals.css';
import Navbar from './components/Navbar';

function getSeasonalImage() {
  const month = new Date().getMonth() + 1;
  
  if (month >= 3 && month <= 5) return '/images/spring.jpg';
  if (month >= 6 && month <= 8) return '/images/summer.jpg';
  if (month >= 9 && month <= 11) return '/images/fall.jpg';
  return '/images/winter.jpg';
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const backgroundImage = getSeasonalImage();

  return (
    <html lang="en">
      <body className="relative min-h-screen font-sans text-gray-800">
        
        {/* 🌄 FULL SCREEN BACKGROUND */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* 🌫️ FADE OVERLAY */}
        <div className="fixed inset-0 -z-10 bg-white/70" />

        {/* CONTENT */}
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>

        <footer className="mt-12 border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Poulin Family
        </footer>

      </body>
    </html>
  );
}
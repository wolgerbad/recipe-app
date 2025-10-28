import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Recipedia - Discover Amazing Recipes',
  description: 'Find your favorite recipes and learn how to make them!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-orange-50 via-white to-amber-50 min-h-screen`}
      >
        <header className="sticky top-0 z-50 bg-white/80 border-b border-orange-100">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold bg-orange-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                Recipedia
              </Link>

              <div className="flex items-center gap-6">
                <Link
                  href="/categories"
                  prefetch
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
                >
                  Categories
                </Link>
                <Link
                  href="/favorites"
                  prefetch
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
                >
                  Favorites
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="mt-24 py-8 text-center text-gray-500 border-t border-orange-100">
          <p className="text-sm">
            Recipedia | Built by{' '}
            <a
              href="https://github.com/wolgerbad"
              className="hover:underline"
              target="_blank"
            >
              Emir Işık
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

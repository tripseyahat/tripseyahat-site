import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Trip Seyahat',
  description: 'Uygun uçuş ve tatil planları',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">Trip Seyahat</Link>
            <nav className="nav">
              <Link href="/">Ana Sayfa</Link>
              <Link href="/flights">Uçuşlar</Link>
              <Link href="/about">Hakkımızda</Link>
              <Link href="/contact">İletişim</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Trip Seyahat • Her hakkı saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

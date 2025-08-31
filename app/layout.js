import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TripSeyahat",
  description: "Uygun uçuş, otobüs, otel ve transfer fırsatları",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Üst Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" aria-label="TripSeyahat" className="logo-wrap">
              <Image src="/logo.svg" alt="TripSeyahat" width={180} height={56} priority />
            </Link>

            <nav className="main-nav">
              <Link href="/">Ana Sayfa</Link>
              <Link href="/flights">Uçuşlar</Link>
              <Link href="/bus">Otobüs</Link>
              <Link href="/hotels">Oteller</Link>
              <Link href="/deals">Kampanyalar</Link>
              <Link href="/about">Hakkımızda</Link>
              <Link href="/contact">İletişim</Link>
            </nav>
          </div>
        </header>

        {/* Sayfa içerikleri */}
        {children}

        {/* Alt bilgi */}
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} TripSeyahat</span>
            <span>Uygun fiyatlı seyahat için yanınızdayız.</span>
          </div>
        </footer>
      </body>
    </html>
  );
    }

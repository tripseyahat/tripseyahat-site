import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              <Image
                src="/logo.svg"
                alt="TripSeyahat"
                width={160}
                height={60}
                priority
              />
            </Link>

            <nav>
              <Link href="/">Ana Sayfa</Link>
              <Link href="/flights">Uçuşlar</Link>
              <Link href="/hotels">Oteller</Link>
              <Link href="/deals">Kampanyalar</Link>
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

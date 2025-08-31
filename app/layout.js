import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              {/* LOGO inline SVG */}
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <svg width="48" height="48" viewBox="0 0 128 128" aria-hidden="true">
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1A73E8"/>
                      <stop offset="100%" stopColor="#2DD4BF"/>
                    </linearGradient>
                  </defs>
                  <circle cx="64" cy="64" r="56" fill="url(#g2)"/>
                  <polygon points="22,60 106,64 22,68 46,64" fill="#fff"/>
                </svg>

                <svg width="220" height="48" viewBox="0 0 460 112" aria-label="TripSeyahat">
                  <text x="0" y="84" fontFamily="Arial, sans-serif" fontSize="84" fontWeight="900" fill="#0B1437">Trip</text>
                  <text x="170" y="84" fontFamily="Arial, sans-serif" fontSize="84" fontWeight="900" fill="#FF0000">Seyahat</text>
                </svg>
              </div>
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

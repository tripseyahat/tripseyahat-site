export default function HomePage() {
  return (
    <main className="container">
      <h1>Trip Seyahat</h1>
      <p>Uygun uçuş ve tatil fırsatlarını keşfet!</p>

      <section className="cards">
        <a className="card" href="/flights">
          ✈️ Uçuş Ara
        </a>
        <a className="card" href="/about">
          ℹ️ Hakkımızda
        </a>
        <a className="card" href="/contact">
          📬 İletişim
        </a>
      </section>
    </main>
  );
}

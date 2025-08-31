export default function HotelsPage() {
  return (
    <div className="container">
      <h1>Oteller</h1>

      <div className="cards">
        <div className="card">
          <img
            src="/images/hotel1.jpg"
            alt="İstanbul City Hotel"
            width="640"
            height="360"
          />
          <h2>İstanbul City Hotel</h2>
          <p>İstanbul</p>
          <p>₺1.450 / gece</p>
          <button>Detay / Rezervasyon</button>
        </div>

        <div className="card">
          <img
            src="/images/hotel2.jpg"
            alt="Antalya Beach Resort"
            width="640"
            height="360"
          />
          <h2>Antalya Beach Resort</h2>
          <p>Antalya</p>
          <p>₺2.300 / gece</p>
          <button>Detay / Rezervasyon</button>
        </div>

        <div className="card">
          <img
            src="/images/hotel3.jpg"
            alt="Kapadokya Cave Suites"
            width="640"
            height="360"
          />
          <h2>Kapadokya Cave Suites</h2>
          <p>Kapadokya</p>
          <p>₺1.950 / gece</p>
          <button>Detay / Rezervasyon</button>
        </div>

        <div className="card">
          <img
            src="/images/hotel4.jpg"
            alt="İzmir Marina Hotel"
            width="640"
            height="360"
          />
          <h2>İzmir Marina Hotel</h2>
          <p>İzmir</p>
          <p>₺1.700 / gece</p>
          <button>Detay / Rezervasyon</button>
        </div>
      </div>
    </div>
  );
              }

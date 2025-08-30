export default function DealsPage() {
  return (
    <main className="container">
      <h1>Kampanyalar</h1>
      <div className="deals-grid">
        <div className="deal-card">
          <h2>İstanbul ⇄ Londra</h2>
          <p>El bagajı dahil gidiş–dönüş</p>
          <p>₺1.299</p>
          <button>Detayları Gör</button>
        </div>
        <div className="deal-card">
          <h2>İzmir ⇄ Paris</h2>
          <p>2 gece konaklama + uçuş</p>
          <p>₺5.499</p>
          <button>Detayları Gör</button>
        </div>
        <div className="deal-card">
          <h2>Antalya ⇄ Berlin</h2>
          <p>Sadece gidiş promosyonu</p>
          <p>₺1.199</p>
          <button>Detayları Gör</button>
        </div>
        <div className="deal-card">
          <h2>Ankara ⇄ Amsterdam</h2>
          <p>Gidiş–dönüş + 20 kg bagaj</p>
          <p>₺3.299</p>
          <button>Detayları Gör</button>
        </div>
      </div>
    </main>
  );
}

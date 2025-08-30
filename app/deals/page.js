export default function DealsPage() {
  const deals = [
    {
      id: 1,
      title: "İstanbul ⇄ Londra",
      desc: "El bagajı dahil gidiş–dönüş",
      price: "₺1.299",
    },
    {
      id: 2,
      title: "İzmir ⇄ Paris",
      desc: "2 gece konaklama + uçuş",
      price: "₺5.499",
    },
    {
      id: 3,
      title: "Antalya ⇄ Berlin",
      desc: "Sadece gidiş promosyonu",
      price: "₺1.199",
    },
    {
      id: 4,
      title: "Ankara ⇄ Amsterdam",
      desc: "Gidiş–dönüş + 20 kg bagaj",
      price: "₺3.299",
    },
  ];

  return (
    <main className="container">
      <h1>Kampanyalar</h1>

      <div className="grid">
        {deals.map((d) => (
          <div className="card" key={d.id}>
            <div className="card-body">
              <h3>{d.title}</h3>
              <p className="muted">{d.desc}</p>
              <p className="price">{d.price}</p>
              <button className="btn">Detayları Gör</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

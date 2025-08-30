export default function HotelsPage() {
  const hotels = [
    {
      id: 1,
      name: "İstanbul City Hotel",
      city: "İstanbul",
      price: "₺1.450 / gece",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    },
    {
      id: 2,
      name: "Antalya Beach Resort",
      city: "Antalya",
      price: "₺2.300 / gece",
      img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200",
    },
    {
      id: 3,
      name: "Kapadokya Cave Suites",
      city: "Kapadokya",
      price: "₺1.950 / gece",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200",
    },
    {
      id: 4,
      name: "İzmir Marina Hotel",
      city: "İzmir",
      price: "₺1.700 / gece",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",
    },
  ];

  return (
    <main className="container">
      <h1>Oteller</h1>

      <div className="grid">
        {hotels.map((h) => (
          <div className="card" key={h.id}>
            <img src={h.img} alt={h.name} className="card-img" />
            <div className="card-body">
              <h3>{h.name}</h3>
              <p className="muted">{h.city}</p>
              <p className="price">{h.price}</p>
              <button className="btn">Detay / Rezervasyon</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

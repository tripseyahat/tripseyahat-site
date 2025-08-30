export default function DealsPage() {
  const deals = [
    { id: 1, title: "İstanbul ⇄ Londra", price: "₺1299" },
    { id: 2, title: "İzmir ⇄ Paris",  price: "₺1599" },
    { id: 3, title: "Antalya ⇄ Berlin", price: "₺1199" },
  ];
  return (
    <>
      <h1>Kampanyalar</h1>
      <ul>
        {deals.map(d => (
          <li key={d.id}>{d.title} — <strong>{d.price}</strong></li>
        ))}
      </ul>
    </>
  );
}

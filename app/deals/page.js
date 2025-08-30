export default function DealsPage() {
  return (
    <>
      <h1>Kampanyalar</h1>
      <ul>
        <li>İstanbul ⇄ Londra — ₺1299</li>
        <li>İzmir ⇄ Paris — ₺1599</li>
        <li>Antalya ⇄ Berlin — ₺1199</li>
      </ul>
    </>
  );
}
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

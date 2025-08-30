export default function HotelsPage() {
  const items = [
    { id: 1, name: "İstanbul City Hotel", price: "₺1450/gece" },
    { id: 2, name: "Antalya Beach Resort", price: "₺2300/gece" },
    { id: 3, name: "Kapadokya Cave Suites", price: "₺1950/gece" },
  ];
  return (
    <>
      <h1>Oteller</h1>
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.name} — <strong>{i.price}</strong></li>
        ))}
      </ul>
    </>
  );
}

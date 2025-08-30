"use client";
import { useState } from "react";

export default function FlightsPage() {
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    // Şimdilik sahte sonuçlar gösterelim
    setResults([
      { id: 1, route: "İstanbul → Londra", price: "₺1299" },
      { id: 2, route: "İzmir → Paris", price: "₺1599" },
      { id: 3, route: "Antalya → Berlin", price: "₺1199" },
    ]);
  }

  return (
    <>
      <h1>Uçuş Ara</h1>
      <p>En iyi uçuş fırsatlarını bulun.</p>

      <form className="form-inline" onSubmit={handleSearch}>
        <input type="text" placeholder="Nereden" />
        <input type="text" placeholder="Nereye" />
        <input type="date" />
        <button type="submit">Ara</button>
      </form>

      {results.length > 0 && (
        <ul style={{ marginTop: 16 }}>
          {results.map((r) => (
            <li key={r.id}>
              {r.route} — <strong>{r.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

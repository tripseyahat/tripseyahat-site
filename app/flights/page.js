"use client";
import { useState } from "react";

export default function FlightsPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Örnek veriler (ileride API bağlanacak)
    setResults([
      { id: 1, from, to, date, price: "120 €" },
      { id: 2, from, to, date, price: "150 €" },
    ]);
  };

  return (
    <div className="container">
      <h1>Find Flights</h1>
      <form onSubmit={handleSearch} className="form">
        <div className="field">
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="field">
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="date"
            required
          />
        </div>
        <button type="submit" className="btn primary">
          Search
        </button>
      </form>

      <div className="results">
        {results.map((flight) => (
          <div key={flight.id} className="result">
            <div className="line">
              <h3>{flight.from} → {flight.to}</h3>
              <p className="price">{flight.price}</p>
            </div>
            <p>{flight.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

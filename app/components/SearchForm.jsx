"use client";

import { useState } from "react";

export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search from ${from} to ${to} on ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="From" 
        value={from} 
        onChange={(e) => setFrom(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="To" 
        value={to} 
        onChange={(e) => setTo(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
}

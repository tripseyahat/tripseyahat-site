'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSend = () => {
    const subject = encodeURIComponent('Trip Seyahat İletişim');
    const body = encodeURIComponent(`Ad: ${name}\n\nMesaj:\n${msg}`);
    window.location.href = `mailto:info@tripseyahat.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="container">
      <h1>İletişim</h1>

      <label>
        Adınız
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınızı yazın"
        />
      </label>

      <label>
        Mesajınız
        <textarea
          rows={5}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Mesajınızı yazın"
        />
      </label>

      <button onClick={handleSend}>Gönder</button>
    </main>
  );
}

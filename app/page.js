'use client';

import { useState } from 'react';

export default function HomePage() {
  const [tab, setTab] = useState('ucak');

  return (
    <>
      {/* HERO + SEARCH */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <div className="search-card">
            <div className="search-tabs" role="tablist" aria-label="Arama türü">
              {[
                { key: 'ucak', label: 'Uçak' },
                { key: 'otobus', label: 'Otobüs' },
                { key: 'otel', label: 'Otel' },
                { key: 'transfer', label: 'Transfer' },
              ].map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={tab === t.key}
                  onClick={() => setTab(t.key)}
                  className={`tab-btn ${tab === t.key ? 'is-active' : ''}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Forms */}
            <div className="search-forms">
              {tab === 'ucak' && <UcakForm />}
              {tab === 'otobus' && <OtobusForm />}
              {tab === 'otel' && <OtelForm />}
              {tab === 'transfer' && <TransferForm />}
            </div>
          </div>
        </div>
      </section>

      {/* İleride: kampanyalar, avantajlar, listeler, footer üstü v.b. alanlar */}
      <section className="container section">
        <h2 className="section__title">Kampanyalar</h2>
        <p className="muted">Bu alanı birazdan dolduracağız (banner’lar, kartlar vb.).</p>
      </section>
    </>
  );
}

/* ------------ FORMLAR ------------- */

function UcakForm() {
  return (
    <form className="grid-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <label>Nereden</label>
        <input type="text" placeholder="Şehir / Havalimanı" />
      </div>
      <div className="form-field">
        <label>Nereye</label>
        <input type="text" placeholder="Şehir / Havalimanı" />
      </div>
      <div className="form-field">
        <label>Gidiş</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Dönüş (opsiyonel)</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Yolcu</label>
        <select defaultValue="1">
          {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Yolcu</option>)}
        </select>
      </div>
      <div className="form-actions">
        <button className="btn-primary">UCUZ BİLET ARA</button>
      </div>
    </form>
  );
}

function OtobusForm() {
  return (
    <form className="grid-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <label>Kalkış</label>
        <input type="text" placeholder="Şehir / Otogar" />
      </div>
      <div className="form-field">
        <label>Varış</label>
        <input type="text" placeholder="Şehir / Otogar" />
      </div>
      <div className="form-field">
        <label>Tarih</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Yolcu</label>
        <select defaultValue="1">
          {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Yolcu</option>)}
        </select>
      </div>
      <div className="form-actions">
        <button className="btn-primary">OTOBÜS BİLETİ ARA</button>
      </div>
    </form>
  );
}

function OtelForm() {
  return (
    <form className="grid-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <label>Şehir / Otel</label>
        <input type="text" placeholder="Şehir / Otel adı" />
      </div>
      <div className="form-field">
        <label>Giriş</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Çıkış</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Kişi</label>
        <select defaultValue="2">
          {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Kişi</option>)}
        </select>
      </div>
      <div className="form-actions">
        <button className="btn-primary">OTEL ARA</button>
      </div>
    </form>
  );
}

function TransferForm() {
  return (
    <form className="grid-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <label>Alış Noktası</label>
        <input type="text" placeholder="Havalimanı / Adres" />
      </div>
      <div className="form-field">
        <label>Bırakış Noktası</label>
        <input type="text" placeholder="Otel / Adres" />
      </div>
      <div className="form-field">
        <label>Tarih</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Saat</label>
        <input type="time" />
      </div>
      <div className="form-actions">
        <button className="btn-primary">TRANSFER ARA</button>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <h1>Uygun Uçak Biletleri</h1>
          <p>En ucuz uçuşları ve fırsatları hemen bul!</p>
          <button className="search-button">Bilet Ara</button>
        </div>
      </section>

      {/* Arka plan altındaki normal içerik */}
      <section className="container">
        <h2>Kampanyalar</h2>
        <p>Burada kampanya kartları olacak...</p>
      </section>
    </div>
  );
}


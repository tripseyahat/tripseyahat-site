"use client";
import { useState } from "react";

export default function HomePage() {
  const [tab, setTab] = useState("ucak");

  return (
    <>
      {/* HERO: Arka plan üstünde sekmeli arama */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <h1 className="hero__title">Uygun Uçak, Otobüs, Otel ve Transfer</h1>
          <p className="hero__desc">Tek yerden arayın, en iyi fiyatları yakalayın.</p>

          <div className="search-card">
            <div className="search-tabs" role="tablist" aria-label="Arama türü">
              {[
                { key: "ucak", label: "Uçak" },
                { key: "otobus", label: "Otobüs" },
                { key: "otel", label: "Otel" },
                { key: "transfer", label: "Transfer" },
              ].map(t => (
                <button
                  key={t.key}
                  className={`tab-btn ${tab === t.key ? "is-active" : ""}`}
                  onClick={() => setTab(t.key)}
                  role="tab"
                  aria-selected={tab === t.key}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="search-forms">
              {tab === "ucak" && <UcakForm />}
              {tab === "otobus" && <OtobusForm />}
              {tab === "otel" && <OtelForm />}
              {tab === "transfer" && <TransferForm />}
            </div>
          </div>
        </div>
      </section>

      {/* Aşağıdaki bölümleri sonra dolduracağız */}
      <section className="container section">
        <h2 className="section__title">Kampanyalar</h2>
        <p className="muted">Bu alanı birazdan banner ve kartlarla dolduracağız.</p>
      </section>
    </>
  );
}

/* ------------ FORMLAR ------------- */
function UcakForm() {
  return (
    <form className="grid-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="form-field"><label>Nereden</label><input placeholder="Şehir / Havalimanı" /></div>
      <div className="form-field"><label>Nereye</label><input placeholder="Şehir / Havalimanı" /></div>
      <div className="form-field"><label>Gidiş</label><input type="date" /></div>
      <div className="form-field"><label>Dönüş (ops.)</label><input type="date" /></div>
      <div className="form-field"><label>Yolcu</label><select defaultValue="1">{[1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></div>
      <div className="form-actions"><button className="btn-primary">UCUZ BİLET ARA</button></div>
    </form>
  );
}
function OtobusForm() {
  return (
    <form className="grid-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="form-field"><label>Kalkış</label><input placeholder="Şehir / Otogar" /></div>
      <div className="form-field"><label>Varış</label><input placeholder="Şehir / Otogar" /></div>
      <div className="form-field"><label>Tarih</label><input type="date" /></div>
      <div className="form-field"><label>Yolcu</label><select defaultValue="1">{[1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></div>
      <div className="form-actions"><button className="btn-primary">OTOBÜS ARA</button></div>
    </form>
  );
}
function OtelForm() {
  return (
    <form className="grid-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="form-field"><label>Şehir / Otel</label><input placeholder="İstanbul, Antalya..." /></div>
      <div className="form-field"><label>Giriş</label><input type="date" /></div>
      <div className="form-field"><label>Çıkış</label><input type="date" /></div>
      <div className="form-field"><label>Misafir</label><select defaultValue="2">{[1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></div>
      <div className="form-actions"><button className="btn-primary">OTEL ARA</button></div>
    </form>
  );
}
function TransferForm() {
  return (
    <form className="grid-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="form-field"><label>Alış Noktası</label><input placeholder="Havalimanı / Adres" /></div>
      <div className="form-field"><label>Bırakış Noktası</label><input placeholder="Otel / Adres" /></div>
      <div className="form-field"><label>Tarih</label><input type="date" /></div>
      <div className="form-field"><label>Saat</label><input type="time" /></div>
      <div className="form-actions"><button className="btn-primary">TRANSFER ARA</button></div>
    </form>
  );
}

"use client";
import { useState } from "react";

const TABS = [
  { key: "flight",  label: "Uçak",     icon: "✈️" },
  { key: "bus",     label: "Otobüs",   icon: "🚌" },
  { key: "hotel",   label: "Otel",     icon: "🏨" },
  { key: "transfer",label: "Transfer", icon: "🚕" },
];

export default function Home() {
  const [tab, setTab] = useState("flight");
  return (
    <section className="home">
      {/* Sekmeler */}
      <div className="tabbar" role="tablist" aria-label="Arama türü">
        {TABS.map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            className={`tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            <span className="tab-icon" aria-hidden>{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </div>

      {/* İçerik */}
      <div className="panel">
        {tab === "flight"   && <FlightForm />}
        {tab === "bus"      && <BusForm />}
        {tab === "hotel"    && <HotelForm />}
        {tab === "transfer" && <TransferForm />}
      </div>
    </section>
  );
}

/* ---------- FORMLAR ---------- */

function FlightForm() {
  const [tripType, setTripType] = useState("oneway"); // oneway | round | multi
  return (
    <form className="card" onSubmit={(e)=>{e.preventDefault(); alert("Uçuşlar aranıyor…");}}>
      <fieldset className="radio-row">
        <label><input type="radio" name="t" value="oneway"
          checked={tripType==="oneway"} onChange={()=>setTripType("oneway")} /> Tek Yön</label>
        <label><input type="radio" name="t" value="round"
          checked={tripType==="round"}  onChange={()=>setTripType("round")} /> Gidiş-Dönüş</label>
        <label><input type="radio" name="t" value="multi"
          checked={tripType==="multi"}  onChange={()=>setTripType("multi")} /> Çoklu Uçuş</label>
      </fieldset>

      <div className="grid">
        <div className="field">
          <label>Nereden</label>
          <input placeholder="Şehir / Havalimanı" required />
        </div>
        <div className="field">
          <label>Nereye</label>
          <input placeholder="Şehir / Havalimanı" required />
        </div>
        <div className="field">
          <label>Gidiş</label>
          <input type="date" required />
        </div>
        {tripType !== "oneway" && (
          <div className="field">
            <label>Dönüş</label>
            <input type="date" />
          </div>
        )}
        <div className="field">
          <label>Yolcular</label>
          <select defaultValue="1">
            {[1,2,3,4,5,6,7,8,9].map(n=><option key={n} value={n}>{n} Yolcu</option>)}
          </select>
        </div>
        <div className="field">
          <label>Sınıf</label>
          <select defaultValue="Eco">
            {["Eco","Premium Eco","Business","First"].map(s=><option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="opt-row">
        <label><input type="checkbox" /> Sadece direkt uçuşlar</label>
        <label><input type="checkbox" /> Tarihler esnek (±3 gün)</label>
      </div>

      <button className="cta">UCUZ BİLET ARA</button>
    </form>
  );
}

function BusForm() {
  return (
    <form className="card" onSubmit={(e)=>{e.preventDefault(); alert("Otobüs aranıyor…");}}>
      <div className="grid">
        <div className="field"><label>Nereden</label><input placeholder="Şehir" required/></div>
        <div className="field"><label>Nereye</label><input placeholder="Şehir" required/></div>
        <div className="field"><label>Tarih</label><input type="date" required/></div>
        <div className="field"><label>Yolcu</label><select defaultValue="1">{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></div>
      </div>
      <button className="cta">OTOBÜS ARA</button>
    </form>
  );
}

function HotelForm() {
  return (
    <form className="card" onSubmit={(e)=>{e.preventDefault(); alert("Oteller aranıyor…");}}>
      <div className="grid">
        <div className="field"><label>Şehir / Otel</label><input placeholder="İstanbul" required/></div>
        <div className="field"><label>Giriş</label><input type="date" required/></div>
        <div className="field"><label>Çıkış</label><input type="date" required/></div>
        <div className="field"><label>Misafir</label><select defaultValue="2">{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></div>
      </div>
      <button className="cta">OTEL ARA</button>
    </form>
  );
}

function TransferForm() {
  return (
    <form className="card" onSubmit={(e)=>{e.preventDefault(); alert("Transfer aranıyor…");}}>
      <div className="grid">
        <div className="field"><label>Alınış Yeri</label><input placeholder="Havalimanı / Adres" required/></div>
        <div className="field"><label>Bırakılış Yeri</label><input placeholder="Otel / Adres" required/></div>
        <div className="field"><label>Tarih</label><input type="date" required/></div>
        <div className="field"><label>Saat</label><input type="time" required/></div>
      </div>
      <button className="cta">TRANSFER ARA</button>
    </form>
  );
    }

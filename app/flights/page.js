export default function FlightsPage() {
  return (
    <>
      <h1>Uçuş Ara</h1>
      <p>En iyi uçuş fırsatlarını bulun.</p>

      <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nereden" />
        <input type="text" placeholder="Nereye" />
        <input type="date" />
        <button type="submit">Ara</button>
      </form>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "../store/cart";

export default function Account() {
  const { company, login, logout } = useAccount();
  const [form, setForm] = useState({
    name: "",
    nip: "",
    email: "",
    phone: "",
    type: "Restauracja",
  });

  function onSubmit(e) {
    e.preventDefault();
    login(form);
  }

  if (company) {
    return (
      <div className="wrap page-head">
        <h1 className="serif">{company.name}</h1>
        <p className="lede">
          Konto firmowe jest aktywne w tej przeglądarce. W docelowym sklepie po weryfikacji NIP-u odblokowujemy
          indywidualny cennik i historię zamówień.
        </p>
        <p className="notice">
          NIP {company.nip} · {company.email} · {company.type}
        </p>
        <p style={{ display: "flex", gap: 12 }}>
          <Link className="btn" to="/katalog">
            Kupuj w katalogu
          </Link>
          <button type="button" className="chip" onClick={logout}>
            Wyloguj
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ paddingBottom: 80 }}>
      <header className="page-head">
        <p className="kicker">Tylko B2B</p>
        <h1 className="serif">Konto dla firmy z NIP-em</h1>
        <p className="lede">
          Natureat nie jest sklepem prezentowym. Po rejestracji weryfikujemy działalność i otwieramy cennik hurtowy.
          Detal indywidualny tu nie kupuje.
        </p>
      </header>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Nazwa firmy
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label>
          NIP
          <input required value={form.nip} onChange={(e) => setForm({ ...form, nip: e.target.value })} />
        </label>
        <label>
          E-mail służbowy
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </label>
        <label>
          Telefon
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </label>
        <label>
          Typ działalności
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option>Restauracja</option>
            <option>Hotel / catering</option>
            <option>Sklep / sieć</option>
            <option>Dystrybutor</option>
          </select>
        </label>
        <button className="btn" type="submit">
          Otwórz konto firmowe
        </button>
      </form>
    </div>
  );
}

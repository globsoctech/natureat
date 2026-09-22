import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAccount, useCart } from "../store/cart";

const links = [
  { to: "/katalog", label: "Katalog" },
  { to: "/horeca", label: "HORECA" },
  { to: "/o-nas", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { pathname } = useLocation();
  const over = pathname === "/";
  const count = useCart((s) => s.count());
  const company = useAccount((s) => s.company);
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  function search(e) {
    e.preventDefault();
    const query = q.trim();
    navigate(query ? `/katalog?q=${encodeURIComponent(query)}` : "/katalog");
    setOpen(false);
  }

  return (
    <>
      <header className={`topbar${over ? " topbar--over" : ""}`}>
        <div className="topbar__inner">
          <NavLink to="/" end className="logo" onClick={() => setOpen(false)}>
            <img src="/brand/logo.png" alt="" />
            Natureat
          </NavLink>
          <nav className="nav">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="topbar__actions">
            <form onSubmit={search}>
              <input
                className="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Szukaj oliwy, oliwek…"
                aria-label="Szukaj w katalogu"
              />
            </form>
            <NavLink to="/konto">{company ? company.name : "Konto firmowe"}</NavLink>
            <NavLink to="/koszyk" className="cart-link">
              Koszyk {count > 0 && <b>{count}</b>}
            </NavLink>
            <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)}>
              Menu
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav${open ? " is-open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/konto" onClick={() => setOpen(false)}>
          Konto firmowe
        </NavLink>
      </div>
    </>
  );
}

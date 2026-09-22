import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <img src="/brand/logo.png" alt="Natureat" width="64" height="64" style={{ background: "#fff", borderRadius: "50%" }} />
          <p style={{ marginTop: 14, maxWidth: "36ch" }}>
            Polski dystrybutor oliwy extra virgin, oliwek i kuchni śródziemnomorskiej. Zakupy na kartony, dla firm z NIP-em.
          </p>
        </div>
        <div>
          <p>Katalog</p>
          <p><Link to="/katalog?cat=oliwy">Oliwy</Link></p>
          <p><Link to="/katalog?cat=oliwki">Oliwki</Link></p>
          <p><Link to="/horeca">HORECA</Link></p>
          <p><Link to="/katalog?cat=bio">Produkty BIO</Link></p>
        </div>
        <div>
          <p>Firma</p>
          <p><Link to="/o-nas">O nas</Link></p>
          <p><Link to="/konto">Konto B2B</Link></p>
          <p><Link to="/kontakt">Kontakt</Link></p>
        </div>
        <div>
          <p>Zamówienia</p>
          <p>hurt.dameco@gmail.com</p>
          <p>Wysyłka w 48 godzin</p>
          <p>Ceny netto, faktura VAT</p>
        </div>
      </div>
      <div className="wrap footer__copy">
        Natureat / Dameco — wizja sklepu B2B na produktach z natureat.pl. Ceny demonstracyjne, cennik indywidualny po zalogowaniu.
      </div>
    </footer>
  );
}

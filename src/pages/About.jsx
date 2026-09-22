import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="wrap" style={{ paddingBottom: 80 }}>
      <header className="page-head">
        <p className="kicker">Dameco · Natureat</p>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
          Zaczęło się od oliwy z Krety. Zostało partnerstwo z producentami.
        </h1>
      </header>
      <div className="split">
        <div>
          <p>
            Natureat to platforma B2B polskiego dystrybutora Dameco. Asortyment rośnie od greckiej extra virgin —
            aromatycznej, barwnej, esencjonalnej — do oliwek, past, kremów balsamicznych, włoskich pomidorów i
            polskich przetworów.
          </p>
          <p>
            Produkty wchodzą do oferty po selekcji pochodzenia i certyfikacji. Dostawy idą do sklepów stacjonarnych i
            sieci, w tym wybranych Intermarché, oraz do gastronomii.
          </p>
          <p>
            Dwie marki własne: <strong>Iorgos</strong> (oliwy, pasty, hummusy, chałwy, oliwki) oraz{" "}
            <strong>Specjały św. Antoniego</strong> (soki, powidła, konfitury z polskich owoców).
          </p>
        </div>
        <img src="/hero.png" alt="" />
      </div>
      <div className="facts">
        <div>
          <h2>Nagrody</h2>
          <p>Iorgos Sparta Premium BIO — złoty medal NATURA FOOD be ECO 2023, produkt zagraniczny ekologiczny.</p>
          <p>Phileos Early Harvest — złoto NATURA FOOD 2022. Phileos BIO — złoto 2021 i Skarb Natury EKOstyl 2019.</p>
          <p>Oliwki Iorgos nadziewane migdałem — kryształowa nagroda EKOstyl.</p>
        </div>
        <div>
          <h2>Jak kupować</h2>
          <p>
            Konto firmowe, NIP, cennik po weryfikacji. Wysyłka w 48 godzin. Zamówienia zbiorcze — cena na stronie
            demonstracyjnej jest netto za sztukę, docelowo każda firma widzi swój pricelist.
          </p>
          <Link className="btn" to="/konto">
            Załóż konto
          </Link>
        </div>
      </div>
    </div>
  );
}

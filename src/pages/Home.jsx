import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useAccount } from "../store/cart";

const featured = products.filter((p) => p.featured && p.category === "oliwy").slice(0, 6);
const olives = products.filter((p) => p.category === "oliwki").slice(0, 6);
const horeca = products.filter((p) => p.horeca).slice(0, 8);

export default function Home() {
  const company = useAccount((s) => s.company);
  return (
    <>
      <section className="hero" style={{ backgroundImage: "url(/hero.png)" }}>
        <div>
          <div className="hero__content">
            <h1>Nie olej z oliwek. Extra virgin z Krety i Sparty.</h1>
            <p>
              Platforma B2B dla restauracji, hoteli i sklepów. Kartony extra virgin z Krety i Sparty, oliwki Iorgos,
              puszki 5 l i pulpy do pizzy — bez pośredników, z fakturą.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--light" to="/katalog">
                Otwórz katalog
              </Link>
              {company ? (
                <Link className="btn btn--ghost" to="/koszyk">
                  Otwórz koszyk
                </Link>
              ) : (
                <Link className="btn btn--ghost" to="/konto">
                  Załóż konto firmowe
                </Link>
              )}
            </div>
          </div>
          <div className="hero__meta">
            <div>
              <strong>48 h</strong>
              <span>wysyłka po potwierdzeniu</span>
            </div>
            <div>
              <strong>BIO</strong>
              <span>Phileos, Iorgos, Cretan Mythos</span>
            </div>
            <div>
              <strong>5 l</strong>
              <span>format kuchni i hotelu</span>
            </div>
            <div>
              <strong>Intermarché</strong>
              <span>sieci i niezależny detal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Asortyment</p>
          <h2>To, co naprawdę schodzi z magazynu.</h2>
          <p className="lede">
            Nie katalog „wszystkiego”. Oliwa, oliwki, kremy balsamiczne i kuchnia HORECA — produkty, które Natureat
            wozi bezpośrednio od producentów.
          </p>
          <div className="cats">
            <Link className="cat" to="/katalog?cat=oliwy" style={{ backgroundImage: "url(/hero.png)" }}>
              <h3>Oliwy extra virgin</h3>
              <p>Iorgos, Phileos, Olivi, Cretan Mythos. Butelka, puszka, 5 litrów.</p>
            </Link>
            <Link className="cat" to="/katalog?cat=oliwki" style={{ backgroundColor: "#2a3328" }}>
              <h3>Oliwki Iorgos</h3>
              <p>Migdał, kalamata, czosnek, papryka. Karton 12 słoików.</p>
            </Link>
            <Link className="cat" to="/horeca" style={{ backgroundColor: "#5a2430" }}>
              <h3>HORECA</h3>
              <p>Pulpy 2,5 kg, passaty, oliwki 1,8 kg, puszki 5 l.</p>
            </Link>
            <Link className="cat" to="/katalog?cat=octy" style={{ backgroundColor: "#3d2a16" }}>
              <h3>Kremy Cretan Nectar</h3>
              <p>Klasyczny, miód, figa, pomarańcza. Do talerza, nie do sałatki ze słoika.</p>
            </Link>
            <Link className="cat" to="/katalog?cat=bio" style={{ backgroundColor: "#314632" }}>
              <h3>Linia BIO</h3>
              <p>Certyfikat na fakturze. Early Harvest z kwasowością ≤ 0,3%.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="wrap">
          <p className="kicker">Oliwy</p>
          <h2>To, za czym wracają stałe zamówienia.</h2>
          <p className="lede">Ceny netto za sztukę. Przycisk dodaje pełny karton — tak kupuje gastronomia.</p>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn" to="/katalog?cat=oliwy">
              Wszystkie oliwy
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Iorgos</p>
          <h2>Oliwki, które wyglądają jak produkt, a nie jak półprodukt.</h2>
          <div className="rail">
            {olives.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grove">
        <div className="wrap">
          <p className="kicker">Kuchnia</p>
          <h2>HORECA nie kupuje 250 ml.</h2>
          <p className="lede">
            5 l oliwy, 2,5 kg pulpy, 1,8 kg oliwek. Koszt porcji spada, faktura zostaje czysta.
          </p>
          <div className="rail">
            {horeca.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn btn--light" to="/horeca">
              Oferta dla gastronomii
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Dameco / Natureat</p>
            <h2>Z gaju, nie z giełdy towarowej.</h2>
            <p className="lede">
              Przygoda zaczęła się od kreteńskiej extra virgin. Dziś Natureat wozi Iorgos i Specjały św. Antoniego do
              sklepów, sieci (w tym Intermarché) i kuchni, które nie chcą kompromisu w oleju.
            </p>
            <div className="facts">
              <div>
                <strong>Marki własne</strong>
                <p>Iorgos — oliwy, oliwki, pasty. Specjały św. Antoniego — polskie soki i zakwasy.</p>
              </div>
              <div>
                <strong>Nagrody, nie naklejki</strong>
                <p>
                  Złoto NATURA FOOD 2021–2023 za Phileos i Iorgos Sparta Premium. Kryształ EKOstyl za oliwki z
                  migdałem.
                </p>
              </div>
              <div>
                <strong>Konto firmowe</strong>
                <p>NIP, cennik po weryfikacji, płatność przelewem. Detal tu nie kupuje jednej butelki na prezent.</p>
              </div>
            </div>
            <p style={{ marginTop: 24 }}>
              <Link className="btn" to="/o-nas">
                Historia firmy
              </Link>
            </p>
          </div>
          <img src="/hero.png" alt="Mix produktów Natureat: oliwy, oliwki, puszki HORECA" />
        </div>
      </section>
    </>
  );
}

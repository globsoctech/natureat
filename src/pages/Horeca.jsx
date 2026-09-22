import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const list = products.filter((p) => p.horeca);

export default function Horeca() {
  return (
    <>
      <section className="section section--grove" style={{ paddingTop: 96 }}>
        <div className="wrap">
          <p className="kicker">Gastronomia i hotel</p>
          <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
            Kuchnia liczy porcję, nie etykietę na Instagramie.
          </h1>
          <p className="lede">
            Puszki 3 i 5 l, pulpy 2,5 kg, oliwki 1,8 kg, passaty 680 g. To samo pochodzenie co na półce detalu — inna
            ekonomia na talerzu.
          </p>
          <Link className="btn btn--light" to="/konto">
            Poproś o cennik HORECA
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

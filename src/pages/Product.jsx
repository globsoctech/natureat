import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartonPrice, formatPrice, getProduct, products, stockLabel } from "../data/products";
import { useCart } from "../store/cart";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(product?.pack || 12);

  if (!product) {
    return (
      <div className="wrap page-head">
        <h1 className="serif">Nie ma takiej pozycji</h1>
        <Link to="/katalog">Wróć do katalogu</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const out = product.stock === "brak";

  return (
    <div className="wrap">
      <p className="kicker" style={{ paddingTop: 28 }}>
        <Link to="/katalog">Katalog</Link> / {product.brand}
      </p>
      <article className="product">
        <div className="product__stage">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          {product.bio && <span className="badge">BIO</span>}
          {product.horeca && <span className="badge badge--oil">HORECA</span>}
          {product.award && <span className="badge">Nagroda</span>}
          <h1 className="serif" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "12px 0" }}>
            {product.name}
          </h1>
          <p className="lede">{product.description}</p>
          <p>
            <strong>{formatPrice(product.price)}</strong> netto / szt.
            <br />
            Karton {product.pack} szt. = {formatPrice(cartonPrice(product))}
          </p>
          <p className="card__meta">
            {product.origin} · {product.unit} · {stockLabel[product.stock]}
            {product.acidity ? ` · kwasowość ${product.acidity}` : ""}
            {product.variety ? ` · ${product.variety}` : ""}
          </p>
          {product.award && <p className="notice">{product.award}</p>}
          <div className="qty">
            <label>
              Ilość sztuk
              <input
                type="number"
                min={1}
                step={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </label>
            <button type="button" className="chip" onClick={() => setQty(product.pack)}>
              1 karton
            </button>
            <button type="button" className="chip" onClick={() => setQty(product.pack * 2)}>
              2 kartony
            </button>
          </div>
          <button className="btn" type="button" disabled={out} onClick={() => add(product, qty)}>
            {out ? "Powiadom o dostępności" : `Dodaj za ${formatPrice(product.price * qty)} netto`}
          </button>
          {product.ean && <p className="card__meta">EAN {product.ean}</p>}
        </div>
      </article>
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <h2>Z tej samej półki</h2>
          <div className="grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

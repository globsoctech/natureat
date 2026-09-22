import { Link } from "react-router-dom";
import { cartonPrice, formatPrice, stockLabel } from "../data/products";
import { useCart } from "../store/cart";

export default function ProductCard({ product }) {
  const add = useCart((s) => s.add);
  const out = product.stock === "brak";

  return (
    <article className="card">
      <Link to={`/produkt/${product.slug}`} className="card__img">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card__body">
        <div className="card__brand">
          {product.bio && <span className="badge">BIO</span>}
          {product.horeca && <span className="badge badge--oil">HORECA</span>}
          {out && <span className="badge badge--out">Brak na stanie</span>}
          {product.brand}
        </div>
        <h3>
          <Link to={`/produkt/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="card__meta">
          {product.unit} · karton {product.pack} szt. · {product.origin}
        </div>
        <div className="card__price">
          <div>
            <strong>{formatPrice(product.price)}</strong>
            <div className="card__meta">netto / szt. · karton {formatPrice(cartonPrice(product))}</div>
          </div>
          <button
            className="btn"
            type="button"
            disabled={out}
            onClick={() => add(product, product.pack)}
          >
            {out ? "Powiadom" : "Karton"}
          </button>
        </div>
        <span className="card__meta">{stockLabel[product.stock]}</span>
      </div>
    </article>
  );
}

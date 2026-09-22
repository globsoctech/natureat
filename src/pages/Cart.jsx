import { Link } from "react-router-dom";
import { formatPrice, products } from "../data/products";
import { useCart } from "../store/cart";

export default function Cart() {
  const { items, setQty, remove, clear } = useCart();
  const rows = items
    .map((i) => ({ ...i, product: products.find((p) => p.id === i.id) }))
    .filter((r) => r.product);
  const total = rows.reduce((s, r) => s + r.product.price * r.qty, 0);

  if (rows.length === 0) {
    return (
      <div className="wrap page-head">
        <h1 className="serif">Koszyk jest pusty</h1>
        <p className="lede">Zacznij od oliwy albo od formatu HORECA — i dodawaj kartonami.</p>
        <Link className="btn" to="/katalog">
          Przejdź do katalogu
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ paddingBottom: 80 }}>
      <header className="page-head">
        <h1 className="serif">Koszyk firmowy</h1>
        <p className="lede">Kwoty netto. Na fakturze doliczymy VAT. Wysyłka liczona po potwierdzeniu palety.</p>
      </header>
      <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Szt.</th>
            <th>Wartość</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <img src={r.product.image} alt="" />
                  <div>
                    <Link to={`/produkt/${r.product.slug}`}>{r.product.name}</Link>
                    <div className="card__meta">
                      {formatPrice(r.product.price)} / szt. · karton {r.product.pack}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={r.qty}
                  style={{ width: 72, height: 40 }}
                  onChange={(e) => setQty(r.id, e.target.value)}
                />
              </td>
              <td>{formatPrice(r.product.price * r.qty)}</td>
              <td>
                <button type="button" className="chip" onClick={() => remove(r.id)}>
                  Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 28, gap: 16, flexWrap: "wrap" }}>
        <button type="button" className="chip" onClick={clear}>
          Wyczyść koszyk
        </button>
        <div>
          <p>
            Razem netto <strong style={{ fontFamily: "Spectral, serif", fontSize: 32 }}>{formatPrice(total)}</strong>
          </p>
          <Link className="btn" to="/konto">
            Wyślij zapytanie / zaloguj firmę
          </Link>
        </div>
      </div>
    </div>
  );
}

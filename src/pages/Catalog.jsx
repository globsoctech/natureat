import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, filterProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

const chips = [
  { id: "all", name: "Wszystko" },
  ...categories,
  { id: "bio", name: "BIO" },
];

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") || "all";
  const q = params.get("q") || "";

  const list = useMemo(() => filterProducts({ category: cat, q }), [cat, q]);

  function setCat(id) {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("cat");
    else next.set("cat", id);
    setParams(next);
  }

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="kicker">Katalog B2B</p>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0 }}>
          {q ? `Wyniki: „${q}”` : "Zakupy na kartony, nie na sztuki do koszyka prezentowego."}
        </h1>
        <p className="lede">
          Ceny netto za sztukę. Zamówienie idzie w opakowaniach zbiorczych. Po zalogowaniu firmy włączamy cennik
          indywidualny.
        </p>
      </header>
      <div className="filters">
        {chips.map((c) => (
          <button key={c.id} className={`chip${cat === c.id ? " is-on" : ""}`} type="button" onClick={() => setCat(c.id)}>
            {c.name}
          </button>
        ))}
      </div>
      <p className="kicker">
        {list.length}{" "}
        {list.length === 1 ? "pozycja" : list.length < 5 ? "pozycje" : "pozycji"}
      </p>
      {list.length === 0 ? (
        <p className="notice">Nic nie pasuje do tego filtra. Wyczyść wyszukiwanie albo wejdź w inną kategorię.</p>
      ) : (
        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
      <div style={{ height: 80 }} />
    </div>
  );
}

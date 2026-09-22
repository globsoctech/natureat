import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="wrap" style={{ paddingBottom: 80 }}>
      <header className="page-head">
        <h1 className="serif">Porozmawiajmy o stałych dostawach</h1>
        <p className="lede">
          Zamówienia i cenniki: hurt.dameco@gmail.com. Poniższy formularz jest częścią dema — w produkcji wpada na
          Netlify Forms i do handlowca.
        </p>
      </header>
      {sent ? (
        <p className="notice">Dziękujemy. W docelowym sklepie odezwiemy się z cennikiem do 48 godzin.</p>
      ) : (
        <form className="form" name="kontakt-b2b" method="POST" data-netlify="true" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="kontakt-b2b" />
          <label>
            Firma
            <input name="firma" required />
          </label>
          <label>
            NIP
            <input name="nip" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required />
          </label>
          <label>
            Co Was interesuje
            <textarea name="tresc" rows={5} placeholder="Oliwa 5 l, oliwki Iorgos, passata…" />
          </label>
          <button className="btn" type="submit">
            Wyślij zapytanie
          </button>
        </form>
      )}
    </div>
  );
}

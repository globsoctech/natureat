import { useState } from "react";

const KEY = "natureat-gate";
const PASS = "1782";

export default function Gate({ children }) {
  const [ok, setOk] = useState(() => sessionStorage.getItem(KEY) === "1");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (value.trim() === PASS) {
      sessionStorage.setItem(KEY, "1");
      setOk(true);
      setError(false);
      return;
    }
    setError(true);
  }

  if (ok) return children;

  return (
    <div className="gate">
      <form className="gate__panel" onSubmit={submit}>
        <img src="/brand/logo.png" alt="Natureat" width="72" height="72" />
        <h1 className="serif">Podgląd sklepu</h1>
        <p>Wpisz hasło, żeby zobaczyć demo B2B.</p>
        <label>
          Hasło
          <input
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            aria-invalid={error}
          />
        </label>
        {error && <p className="gate__error">Nieprawidłowe hasło.</p>}
        <button className="btn" type="submit">
          Wejdź
        </button>
      </form>
    </div>
  );
}

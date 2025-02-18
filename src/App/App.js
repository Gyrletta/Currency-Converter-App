import React, { useState } from "react";
import { currencies } from "./currencies";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const currencyData = currencies.find((c) => c.short === currency);
    if (!currencyData) return 0;

    return amount / currencyData.rate;
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (amount <= 0) {
      alert("Kwota musi być większa niż zero");
      return;
    }

    const calculatedResult = calculateResult(amount, currency);
    setResult(calculatedResult);
  };

  return (
    <div className="container">
      <fieldset className="field">
        <form className="form" onSubmit={formSubmit}>
          <p>
            <h1 className="header">Currency Convert</h1>
            <label className="form__text">Kwota(PLN)*</label>
            <input
              className="form__input amount"
              type="number"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              autofocus
              placeholder="Wprowadź kwotę:"
              required
              step="0.01"
              min="0.01"
            />
          </p>
          <p>
            <label className="form__text">
              <span className="form__labelText">Waluta:</span>
              <select
                className="form__field currency"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <button type="submit" className="form__button">
              Przelicz!
            </button>
          </p>
        </form>
      </fieldset>

      {result !== null && (
        <p className="result">
          {amount} PLN ={" "}
          <strong>
            {result.toFixed(2)}{" "}
            {currencies.find((c) => c.short === currency)?.name}
          </strong>
        </p>
      )}

      <p>Według średniego kursu NBP z dn 17.10.23</p>
    </div>
  );
}

export default App;

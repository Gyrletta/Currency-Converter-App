import React, { useState } from "react";
import { Result } from "../Form/Result/Result";
import "./Form.css";
import { currencies } from "../currencies";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!amount || amount <= 0) {
      alert("Kwota musi być większa niż zero");
      return;
    }

    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="header">Currency Converter</h1>
      <p>
        <label className="form__text">Kwota (PLN)*</label>
        <input
          className="form__input amount"
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          autoFocus
          placeholder="Wprowadź kwotę"
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
            {currencies.map(({ short, name }) => (
              <option key={short} value={short}>
                {name}
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
      <p>Według średniego kursu NBP z dn. 17.10.23</p>
      <Result result={result} />
    </form>
  );
};

export default Form;

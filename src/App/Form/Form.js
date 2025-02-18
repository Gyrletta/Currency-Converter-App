import React from "react";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  formSubmit,
  currencies,
}) => {
  return (
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
            autoFocus
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
  );
};

export default Form;

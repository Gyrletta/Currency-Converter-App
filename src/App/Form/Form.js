import React, { useState } from "react";
import { Result } from "../Form/Result/Result";
import { currencies } from "../currencies";
import { Button, Field, Header, Info, LabelText } from "./styled";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!amount || amount <= 0) {
      return;
    }

    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>Currency Converter</Header>
      <p>
        <label>
          <LabelText>Kwota (PLN)*</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            autoFocus
            placeholder="Wprowadź kwotę"
            required
            step="0.01"
            min="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <LabelText>Waluta:</LabelText>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(({ short, name }) => (
              <option key={short} value={short}>
                {name}
              </option>
            ))}
          </Field>
        </label>
      </p>
      <p>
        <Button>Przelicz!</Button>
      </p>
      <Info>Według średniego kursu NBP z dn. 17.10.23</Info>
      <Result result={result} />
    </form>
  );
};

export default Form;

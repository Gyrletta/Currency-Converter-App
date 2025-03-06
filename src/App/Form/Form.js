import React, { useState } from "react";
import { Result } from "../Form/Result/Result";
import {
  Button,
  Field,
  Header,
  Info,
  LabelText,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData?.rates[currency]?.value;

    if (!rate) {
      console.error(`Brak kursu dla waluty: ${currency}`);
      setResult(null);
      return;
    }

    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount)) {
      alert("Proszę podać prawidłową kwotę");
      setResult(null);
      return;
    }

    setResult({
      sourceAmount: parsedAmount,
      targetAmount: parsedAmount * rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!amount || !currency) {
      alert("Proszę uzupełnić wszystkie pola.");
      return;
    }
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Form>
        <Header>Kantor Walutowy</Header>
        {ratesData.state === "loading" ? (
          <Loading>Ładowanie kursów...</Loading>
        ) : ratesData.state === "error" ? (
          <Failure>Błąd: {ratesData.error || "Nieznany błąd"}</Failure>
        ) : (
          <>
            <p>
              <LabelText>Kwota w PLN*</LabelText>
              <Field
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                min="1"
                step="any"
                required
              />
            </p>
            <p>
              <LabelText>Wybierz walutę</LabelText>
              <Field
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                required
              >
                <option value="">Wybierz walutę</option>
                {Object.keys(ratesData.rates).map((rateKey) => (
                  <option key={rateKey} value={rateKey}>
                    {rateKey}
                  </option>
                ))}
              </Field>
            </p>
            <p>
              <Button
                disabled={ratesData.state === "loading" || !amount || !currency}
              >
                Przelicz
              </Button>
            </p>
            {result && <Result result={result} />}
          </>
        )}
        <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.</Info>
      </Form>
    </form>
  );
};

export default Form;

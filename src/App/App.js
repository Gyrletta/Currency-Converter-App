import React, { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form/Form";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const currencyData = currencies.find(
      (currencyItem) => currencyItem.short === currency
    );
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
      <Form
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        formSubmit={formSubmit}
        currencies={currencies}
      />

      {result !== null && (
        <p className="result">
          <strong>
            {amount} PLN = {result.toFixed(2)}{" "}
            {
              currencies.find((currencyItem) => currencyItem.short === currency)
                ?.name
            }
          </strong>
        </p>
      )}

      <p>Według średniego kursu NBP z dn 17.10.23</p>
    </div>
  );
}

export default App;

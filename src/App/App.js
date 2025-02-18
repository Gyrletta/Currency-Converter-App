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

    const targetAmount = amount / currencyData.rate;
    return {
      sourceAmount: parseFloat(amount),
      targetAmount: targetAmount,
      currency: currencyData.name,
    };
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
        result={result}
      />
    </div>
  );
}

export default App;

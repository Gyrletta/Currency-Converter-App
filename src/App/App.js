import React, { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form/Form";
import { Clock } from "./Clock";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const currencyData = currencies.find(({ short }) => short === currency);
    if (!currencyData) return;

    setResult({
      sourceAmount: parseFloat(amount),
      targetAmount: parseFloat(amount) / currencyData.rate,
      currency,
    });
  };

  return (
    <div className="container">
      <Clock />
      <Form calculateResult={calculateResult} result={result} />
    </div>
  );
}

export default App;

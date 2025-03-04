import React, { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form/Form";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency)?.rate;

    if (!rate) return;

    setResult({
      sourceAmount: +amount,
      targetAmount: +amount / rate,
      currency,
    });
  };

  return (
    <Wrapper>
      <Clock />
      <Form calculateResult={calculateResult} result={result} />
    </Wrapper>
  );
}

export default App;

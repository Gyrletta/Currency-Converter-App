import React from "react";
import { Wrapper } from "./styled";

export const Result = ({ result }) => (
  <Wrapper>
    {!!result ? (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    ) : (
      <span>Wprowadź dane, aby zobaczyć wynik.</span>
    )}
  </Wrapper>
);

import React from "react";
import "./Result.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== null && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency};
        </strong>
      </>
    )}
  </p>
);

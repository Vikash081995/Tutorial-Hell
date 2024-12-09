import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button type="button" onClick={() => setAmount(amount)}>
        Amount
      </button>
    </div>
  );
};

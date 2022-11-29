import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className="mt-3">Counter</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}>
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}>
        Zero
      </button>
      <div className="mt-3 fs-3">{counter}</div>
    </div>
  );
};

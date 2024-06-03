import React, { useEffect, useMemo, useState } from "react";

// Key Differences between useEffect and UseMemo

// Purpose:
// useEffect: For handling side effects.
// useMemo: For optimizing performance by memoizing values.

// Execution Time:
// useEffect: Runs after render.
// useMemo: Runs during render.

// Return Value:
// useEffect: Does not return a value (optionally returns a cleanup function).
// useMemo: Returns a memoized value.

// Use Cases:
// useEffect: Fetching data, subscribing to services, modifying the DOM, logging.
// useMemo: Memoizing expensive computations, optimizing performance.

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const calc = (num) => {
    console.log("calculating...");
    return Math.pow(num, 3);
  };

  const result = useMemo(() => calc(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Cube : {result}</h2>
      <hr />
      <h1>counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Counter++</button>
    </div>
  );
};

export default UseMemo;

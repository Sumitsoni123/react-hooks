import React, { useCallback, useState } from "react";
import Header from "../components/header";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // this fn will be called only once and does not gets effected due to component re render
  const memoizedIncrement = useCallback(increment, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Header handleClick={memoizedIncrement} />
      <button onClick={increment}>Increment in Parent</button>
    </div>
  );
};

export default UseCallback;

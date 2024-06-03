import React, { useEffect, useState } from "react";
// used to perform side effect in DOM like fetching api data, timers like setTimeout & setIntervals

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  // it runs for every component renders
  // []: runs only one time
  // [counter]: runs only when counter changes

  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 2000);
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  );
};

export default UseEffect;

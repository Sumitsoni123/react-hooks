import React, { useState } from "react";

const UseState = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    color: "grey",
    year: 2024,
  });

  const [count, setCount] = useState(0);

  const changeCar = () => {
    setCar({ ...car, brand: "Mercedes" });
  };

  const increment = () => {
    setCount(count + 1); // this will inc default value by 1
    setCount((prev) => prev + 1); // this will inc prev set value by 1
  };
  return (
    <div>
      <h1>My Favourite car is {car.brand}!</h1>
      <button onClick={changeCar}>Change</button>

      <hr />
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseState;

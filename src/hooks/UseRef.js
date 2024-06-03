import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);

  // useref does not cause re render of component
  const counter = useRef(0);

  // it is also used to get reference of DOM element
  const inputEle = useRef();

  console.log(inputEle.current);

  useEffect(() => {
    counter.current += 1;
  });
  return (
    <div>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
          inputEle.current.style.background = "black";
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
          inputEle.current.style.background = "blue";
        }}
      >
        +1
      </button>
      <hr />

      <h1>{counter.current}</h1>
      <input type="text" ref={inputEle} />
    </div>
  );
};

export default UseRef;

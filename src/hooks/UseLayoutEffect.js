import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  // runs after the DOM loads
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  // runs before the DOM loads
  // generally it is degrades the performance of component
  useLayoutEffect(() => {
    console.log("hello from useLayout Effect");
  }, []);

  return (
    <div>
      {Array(10000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.random()}</li>
        ))}
    </div>
  );
};

export default UseLayoutEffect;

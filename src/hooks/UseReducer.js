import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc": {
        return { count: state.count + 1 };
      }
      case "dec": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <br />

      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
    </div>
  );
};

export default UseReducer;

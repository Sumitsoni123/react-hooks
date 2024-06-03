import React from "react";

const Header = ({ handleClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={handleClick}>Increment from Child</button>;
};

export default React.memo(Header);

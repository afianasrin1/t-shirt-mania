import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const money = useContext(MoneyContext);
  return (
    <div>
      <h1> Friend</h1>
      <h2>Grandpa Dise:{money}</h2>
    </div>
  );
};

export default Friend;

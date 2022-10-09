import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ house }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>House:{house}</small>
      </p>
      <Friend />
    </div>
  );
};

export default Cousin;

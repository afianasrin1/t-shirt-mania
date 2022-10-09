import React, { useContext } from "react";
import { NeclaceContext } from "../Grandpa/Grandpa";
const Special = ({ house, ring }) => {
  const neclace = useContext(NeclaceContext);
  return (
    <div>
      <h4> Special from myself</h4>
      <p>
        <small>House:{house}</small>
      </p>
      <p>Gift:{neclace}</p>
      <p>Gift:{ring}</p>
    </div>
  );
};

export default Special;

import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house, ring }) => {
  return (
    <div>
      <h4>baba</h4>
      <p>
        <small>House:{house}</small>
      </p>
      <section className="flex">
        <Myself house={house} ring={ring}></Myself>
        <Sister house={house}></Sister>
        <Brother house={house}></Brother>
      </section>
    </div>
  );
};

export default Father;

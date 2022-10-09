import React from "react";
import Special from "../Special/Special";

const Myself = ({ house, ring }) => {
  return (
    <div>
      <h4> ami</h4>
      <p>
        <small>House:{house}</small>
      </p>
      <section className="flex">
        <Special house={house} ring={ring}></Special>
      </section>
    </div>
  );
};

export default Myself;

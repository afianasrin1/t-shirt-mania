import "./Grandpa.css";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import { createContext, useState } from "react";
export const NeclaceContext = createContext("sita har");
export const MoneyContext = createContext(2000);
const Grandpa = () => {
  const house = 7;
  const ring = "diamond ring";
  const [money, setMoney] = useState(2000);
  return (
    <NeclaceContext.Provider value="dadur dadir">
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2> GRANDPA</h2>
          <section className="flex">
            <Father house={house} ring={ring}></Father>
            <Aunty house={house}></Aunty>
            <Uncle house={house}></Uncle>
          </section>
        </div>
      </MoneyContext.Provider>
    </NeclaceContext.Provider>
  );
};

export default Grandpa;

import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveItem }) => {
  // let message;
  // if (cart.length === 0) {
  //   message = <p> please buy at least one item</p>;
  // } else if (cart.length === 1) {
  //   message = (
  //     <div>
  //       <p> amar janno neu 2 ta</p>
  //       <h1> vaier janno neu</h1>
  //     </div>
  //   );
  // } else {
  //   message = <p>thanks </p>;
  // }
  return (
    <div>
      <h2 className={cart.length === 5 ? `orange` : `gray`}> Order summary</h2>
      <h2 className={`bold ${cart.length === 2 ? "orange" : "gray"}`}>
        Order quantity:{cart.length}
      </h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          name:{tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {/* {message} */}
      {/* {cart.length === 3 ? <p>kino 2</p> : <p>kino 3</p>}
       */}
      {/* <p> and operator</p> */}
      {/* {cart.length === 2 && <h2> amar janno ayno </h2>} */}
      {cart.length === 5 || <h2> 5 thoy nai </h2>}
    </div>
  );
};

export default Cart;

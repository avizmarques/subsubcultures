import React from "react";

export default function CartItem(props) {
  return (
    <div className="cartItem">
      <img src={props.imgUrl} />
      <p>{props.name}</p>
      <p>{props.qty}</p>
      <p>€ {props.price}</p>
      <button onClick={props.removeItem}>x</button>
    </div>
  );
}

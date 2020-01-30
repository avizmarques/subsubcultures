import React from "react";

export default function GameCard(props) {
  return (
    <div>
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>€ {props.price}</p>
    </div>
  );
}

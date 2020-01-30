import React from "react";

export default function GameCard(props) {
  return (
    <div className="gameCard">
      <img src={props.imgUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>€ {props.price}</p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function GameCard(props) {
  return (
    <div className="gameCard">
      <Link to={`/games/${props.id}`}>
        <img src={props.imgUrl} alt={props.name} />
      </Link>
      <h3>{props.name}</h3>
      <p>€ {props.price}</p>
    </div>
  );
}

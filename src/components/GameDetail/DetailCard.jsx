import React from "react";

export default function DetailCard(props) {
  const game = props.game;
  return (
    <div>
      <h1>{game.name}</h1>
      <p>by: {game.primary_publisher}</p>
      <img src={game.image_url} />
      <h2>€ {game.price}</h2>
      <p>
        {game.min_players} - {game.max_players} players
      </p>
      <p>
        Playtime: {game.min_playtime} - {game.max_playtime} mins
      </p>
      <p>
        Average user rating: {Math.trunc(game.average_user_rating)} / 5 (
        {game.num_user_ratings} votes)
      </p>
      <p>Year: {game.year_published}</p>
      <h3>Description:</h3>
      <p>{game.description}</p>
    </div>
  );
}

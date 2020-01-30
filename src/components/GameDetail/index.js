import React, { Component } from "react";
import { connect } from "react-redux";

class GameDetail extends Component {
  render() {
    const gameId = this.props.match.params.id;

    if (!this.props.games) {
      return <div>Loading...</div>;
    }

    const game = this.props.games.adventure.find(game => game.id === gameId);
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
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    games: reduxState.games
  };
}

export default connect(mapStateToProps)(GameDetail);

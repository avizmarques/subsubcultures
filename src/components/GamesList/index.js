import React, { Component } from "react";
import { fetchAdventureGames } from "../../store/games/gamesActions";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import "./style.css";

class GamesList extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchAdventureGames);
  };

  renderGameCards = (games, CardComponent) => {
    return games.map(game => (
      <CardComponent
        key={game.id}
        name={game.name}
        imgUrl={game.image_url}
        price={game.price}
      />
    ));
  };

  render() {
    if (!this.props.games.adventure) {
      return (
        <div>
          <h2>Our favourites</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Our favourites</h2>
        <div className="grid">
          {this.renderGameCards(this.props.games.adventure, GameCard)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    games: reduxState.games
  };
}

export default connect(mapStateToProps)(GamesList);

import React, { Component } from "react";
import { fetchGames } from "../../store/games/gamesActions";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import "./style.css";
import { addToCart } from "../../store/cart/cartActions";

class GamesList extends Component {
  componentDidMount = () => {
    console.log(this.props.results);
    this.props.dispatch(fetchGames("category=KUBCKBkGxV&limit=12"));
  };

  renderGameCards = (games, CardComponent) => {
    return games.map(game => (
      <CardComponent
        key={game.id}
        id={game.id}
        name={game.name}
        imgUrl={game.image_url}
        price={game.price}
        addToCart={() => this.props.dispatch(addToCart(game))}
      />
    ));
  };

  render() {
    if (!this.props.results.length) {
      return (
        <div>
          <h2>Our favourites</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Welcome to Sub-Subcultures</h1>
        <p>Shop here for all your favourite board games</p>
        <div className="grid">
          {this.renderGameCards(this.props.results, GameCard)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    results: reduxState.gameSearches.results,
    searchTerm: reduxState.gameSearches.searchTerm
  };
}

export default connect(mapStateToProps)(GamesList);

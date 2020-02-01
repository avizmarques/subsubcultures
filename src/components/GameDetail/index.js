import React, { Component } from "react";
import { connect } from "react-redux";
import DetailCard from "./DetailCard";
import { addToCart } from "../../store/cart/cartActions";

class GameDetail extends Component {
  render() {
    const gameId = this.props.match.params.id;

    if (this.props.gameSearches.results.length === 0) {
      return <div>Loading...</div>;
    }

    const game = this.props.gameSearches.results.find(
      game => game.id === gameId
    );
    return (
      <div>
        <DetailCard
          game={game}
          addToCart={() => this.props.dispatch(addToCart(game))}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    gameSearches: reduxState.gameSearches
  };
}

export default connect(mapStateToProps)(GameDetail);

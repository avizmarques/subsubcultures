import React, { Component } from "react";
import { connect } from "react-redux";
import DetailCard from "./DetailCard";

class GameDetail extends Component {
  render() {
    const gameId = this.props.match.params.id;

    if (!this.props.games) {
      return <div>Loading...</div>;
    }

    const game = this.props.games.adventure.find(game => game.id === gameId);
    return (
      <div>
        <DetailCard game={game} />
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

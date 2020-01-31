import React, { Component } from "react";
import { fetchGames } from "../store/games/gamesActions";
import { connect } from "react-redux";

class SearchGame extends Component {
  state = {
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      fetchGames(`name=${encodeURIComponent(this.state.searchTerm)}`)
    );
  };

  updateState = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.updateState}
          />
          <button>Search!</button>
        </form>
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

export default connect(mapStateToProps)(SearchGame);

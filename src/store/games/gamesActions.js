export function fetchGames(searchTerm) {
  return (dispatch, getState) => {
    fetch(
      `https://www.boardgameatlas.com/api/search?${searchTerm}&client_id=SB1VGnDv7M`
    )
      .then(res => res.json())
      .then(data => {
        dispatch(gamesFetched(data.games, searchTerm));
      });
  };
}

export function gamesFetched(games, searchTerm) {
  return {
    type: "games/FETCHED",
    payload: {
      results: games,
      searchTerm
    }
  };
}

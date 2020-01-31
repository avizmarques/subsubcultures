export function fetchGames(searchTerm) {
  return (dispatch, getState) => {
    fetch(
      `https://www.boardgameatlas.com/api/search?${searchTerm}&client_id=SB1VGnDv7M`
    )
      .then(res => res.json())
      .then(games => {
        dispatch(gamesFetched(games, searchTerm));
      });
  };
}

export function gamesFetched(games, searchTerm) {
  return {
    type: "adventureGames/FETCHED",
    payload: {
      games,
      searchTerm
    }
  };
}

// export async function fetchAdventureGames(dispatch, getState) {
//   const adventureGamesRes = await fetch(
//     "https://www.boardgameatlas.com/api/search?category=KUBCKBkGxV&limit=12&client_id=SB1VGnDv7M"
//   );
//   const adventureGames = await adventureGamesRes.json();
//   dispatch(gamesFetched(adventureGames.games));
// }

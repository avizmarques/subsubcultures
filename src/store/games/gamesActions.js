export async function fetchAdventureGames(dispatch, getState) {
  const adventureGamesRes = await fetch(
    "https://www.boardgameatlas.com/api/search?category=KUBCKBkGxV&limit=12&client_id=SB1VGnDv7M"
  );
  const adventureGames = await adventureGamesRes.json();
  dispatch(gamesFetched(adventureGames.games));
}

export function gamesFetched(games) {
  return {
    type: "adventureGames/FETCHED",
    payload: games
  };
}

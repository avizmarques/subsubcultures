const initialState = {
  games: []
};

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return { ...state, games: action.payload };
    }
    default: {
      return state;
    }
  }
}

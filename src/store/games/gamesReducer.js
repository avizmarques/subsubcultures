const initialState = {};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case "adventureGames/FETCHED": {
      return { ...state, adventure: action.payload };
    }
    default: {
      return state;
    }
  }
}

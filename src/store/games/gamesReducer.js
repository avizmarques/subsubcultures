const initialState = [];

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

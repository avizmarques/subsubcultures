const initialState = {
  results: [],
  searchTerm: ""
};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case "games/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

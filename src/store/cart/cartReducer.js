const initialstate = [];

export function cartReducer(state = initialstate, action) {
  switch (action.type) {
    case "cart/ADD": {
      return [...state, action.payload];
    }
    case "cart/CLEAR": {
      return [];
    }
    default: {
      return state;
    }
  }
}

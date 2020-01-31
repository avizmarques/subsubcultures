const initialstate = [
  {
    id: null,
    name: null,
    price: null,
    imgUrl: null,
    qty: null
  }
];

export function cartReducer(state = initialstate, action) {
  switch (action.type) {
    case "cart/ADD": {
      const itemInState = state.some(item => item.id === action.payload.id);

      if (itemInState) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }
    case "cart/REMOVE": {
      return action.payload.qty > 1
        ? state.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        : state.filter(item => item.id !== action.payload.id);
    }
    case "cart/CLEAR": {
      return [];
    }

    default: {
      return state;
    }
  }
}

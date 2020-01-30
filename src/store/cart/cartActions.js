export function addToCart(game) {
  return dispatch => {
    dispatch(sendToCart(game));
  };
}

export function sendToCart(game) {
  return {
    type: "cart/ADD",
    payload: game
  };
}

export function clearCart() {
  return {
    type: "cart/CLEAR"
  };
}

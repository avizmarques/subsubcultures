export function addToCart(game) {
  return dispatch => {
    dispatch(sendToCart(game));
  };
}

export function sendToCart(game) {
  return {
    type: "cart/ADD",
    payload: {
      id: game.id,
      price: game.price
    }
  };
}

export function clearCart() {
  return {
    type: "cart/CLEAR"
  };
}

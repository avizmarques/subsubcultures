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
      name: game.name,
      price: game.price,
      imgUrl: game.image_url
    }
  };
}

export function clearCart() {
  return {
    type: "cart/CLEAR"
  };
}

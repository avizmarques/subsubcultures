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

export function removeFromCart(game) {
  return dispatch => {
    dispatch(sendRemoveToCart(game));
  };
}

export function sendRemoveToCart(game) {
  return {
    type: "cart/REMOVE",
    payload: {
      id: game.id,
      name: game.name,
      price: game.price,
      imgUrl: game.image_url,
      qty: game.qty
    }
  };
}

export function clearCart() {
  return {
    type: "cart/CLEAR"
  };
}

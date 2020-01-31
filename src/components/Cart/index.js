import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import "./style.css";
import { removeFromCart } from "../../store/cart/cartActions";

class Cart extends Component {
  renderCartCards = (games, CardComponent) => {
    return games.map(game => (
      <CardComponent
        key={game.id}
        id={game.id}
        name={game.name}
        imgUrl={game.imgUrl}
        price={game.price}
        qty={game.qty}
        removeFromCart={() => this.props.dispatch(removeFromCart(game))}
      />
    ));
  };

  calculateTotal = cart => {
    return (
      Math.round(
        cart.reduce((total, item) => {
          return total + item.price * item.qty;
        }, 0) * 100
      ) / 100
    );
  };

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <div>
          <div className="cartItem">
            <p></p>
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          {this.renderCartCards(this.props.cart, CartItem)}
        </div>
        <div className="total">
          <h2>Total</h2>
          <p>€ {this.calculateTotal(this.props.cart)}</p>
          <button>Pay ></button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Cart);

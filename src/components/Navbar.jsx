import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { clearCart } from "../store/cart/cartActions";

function Navbar(props) {
  return (
    <div className="navbar">
      <p>Sub-Subcultures</p>
      <Link to="/">Home</Link>
      <p>Cart ({props.numberOfItemsInCart})</p>
      <button onClick={() => props.dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    numberOfItemsInCart: reduxState.cart.reduce((total, item) => {
      return total + item.qty;
    }, 0)
  };
}

export default connect(mapStateToProps)(Navbar);

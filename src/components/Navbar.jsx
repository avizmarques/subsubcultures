import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { clearCart } from "../store/cart/cartActions";
import cart from "./images/supermarket.png";
import SearchGame from "./SearchGame";

function Navbar(props) {
  return (
    <div className="navbar">
      <p>Sub-Subcultures</p>
      <Link to="/">Home</Link>
      <SearchGame />
      <Link to="/cart">
        <p>
          <img src={cart} id="cart" /> ({props.numberOfItemsInCart})
        </p>
      </Link>
      <button onClick={() => props.dispatch(clearCart())}>clear</button>
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

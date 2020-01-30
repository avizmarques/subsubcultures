import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <p>Sub-Subcultures</p>
      <Link to="/">Home</Link>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Navbar);

import React from "react";

export default function PayForm(props) {
  return (
    <div className="payForm">
      <h1>Checkout</h1>
      <p>Please fill in your details</p>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="text" />
        <label>Address</label>
        <input type="text" />
      </form>
    </div>
  );
}

import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamesList from "./components/GamesList";
import GameDetail from "./components/GameDetail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import PayForm from "./components/Cart/PayForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/games/:id" component={GameDetail} />
        <Route path="/cart/checkout" component={PayForm} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={GamesList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

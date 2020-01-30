import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamesList from "./components/GamesList";
import GameDetail from "./components/GameDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/games/:id" component={GameDetail} />
        <Route path="/" component={GamesList} />
      </Switch>
    </div>
  );
}

export default App;

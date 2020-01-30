import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamesList from "./components/GamesList";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/games/:id" component={GameDetail} />
        <Route path="/" component={GamesList} />
      </Switch>
    </div>
  );
}

export default App;

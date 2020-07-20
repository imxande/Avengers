import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import AdvengersList from "./components/AvengersList";

function App() {
  return (
    <div>
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AdvengersList} />
      </Switch>
    </div>
  );
}

export default App;

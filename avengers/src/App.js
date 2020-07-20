import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
      <Home />
    </div>
  );
}

export default App;

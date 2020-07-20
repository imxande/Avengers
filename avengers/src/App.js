import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import AvengersList from "./components/AvengersList";
import avengersData from "./data/data";

function App() {
  // data state
  const [data, setData] = useState(avengersData);
  console.log("Data: ", data);

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
        <Route path="/avengers">
          <AvengersList data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

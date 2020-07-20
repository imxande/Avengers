import React, { useState } from "react";
import avengersData from "../data/data";
import Avenger from "./Avenger";

const AvengersList = () => {
  // data state
  const [data, setData] = useState(avengersData);
  console.log("Data: ", data);

  return (
    <div className="avengers">
      <h1>List of Avengers</h1>
      {data.map((avenger, index) => {
        return <Avenger key={index} avenger={avenger} />;
      })}
    </div>
  );
};

export default AvengersList;

import React, { useState } from "react";
import avengersData from "../data/data";

const AvengersList = () => {
  // data state
  const [data, setData] = useState(avengersData);
  console.log(data);

  return (
    <div className="avengers">
      <h1>List of Avengers</h1>
    </div>
  );
};

export default AvengersList;

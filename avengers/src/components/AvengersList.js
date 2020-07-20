import React from "react";

const AvengersList = (props) => {
  console.log("Avengers List:", props);
  return (
    <div className="avengers">
      <h1>List of Avengers</h1>
      {props.data.map((avenger, index) => (
        <div key={index}>
          <p>{avenger.name}</p>
          <img src={avenger.thumbnail} alt="random avengers img" />
        </div>
      ))}
    </div>
  );
};

export default AvengersList;

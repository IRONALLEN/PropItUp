import React from "react";

const Greet = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hcolor}</p>
    </>
  );
};

export default Greet;

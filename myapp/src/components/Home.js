import React from "react";
import Child from "./Child.js";
import "./Home.css"

const Home = () => {
    const headingStyle={color:"blue"};
  return (
    <div className="header">
      <h1 style={{color:"red"}} >Home Component</h1>
      <h2 style={headingStyle}>this for variable css</h2>
      <Child />
    </div>
  );
};

export default Home;

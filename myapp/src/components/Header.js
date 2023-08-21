import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import headerCss from "./Header.module.css";

const Header = () => {
  useState();
  const [color, setColor] = useState("Green");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const changeColor = () => {
    //setColor("Red");
    setColor(color === "Green" ? "Red" : "Green");
  };
  return (
    <>
      <Container fluid>
        <h1 className={headerCss.header}>useState Hook</h1>
        <h2>My favorite color is {color}</h2>
        <Button onClick={changeColor}>Change Colour</Button>

        <br />
        <h1>Counter is {count}</h1>
        <button onClick={increment} className="btn m-2 bg-success">
          +
        </button>
        <button onClick={decrement} className="btn m-2 bg-danger">
          -
        </button>
      </Container>
    </>
  );
};

export default Header;

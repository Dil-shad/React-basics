import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("option2");

  const clickHandle = () => {
    console.log("you clicked");
  };

  const dbClickHandle = (arg) => {
    alert("Hello " + arg);
  };

  const onChangeHandle = (e) => {
    alert("You changed value: " + e.target.value);
  };
  const mouseHoverHandle = (e) => {
    alert("Mouse Over " )
  };
  const onKeyDown = (e) => {
    alert("You pressed " + e.key);
  }
  return (
    <>
      <Container fluid >
        <Button className="mt-5" variant="primary" onClick={clickHandle}>
          Click Me
        </Button>
        <h1 onDoubleClick={() => dbClickHandle("Dilshad")}>Double clicked</h1>
        <select className=" " style={{width:'180px'}} onChange={onChangeHandle} >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2 (Selected)</option>
          <option value="option3">Option 3</option>
        </select><br />
        <input className="mt-2" type="text"  onChange={onChangeHandle} placeholder="OnchangeHandler"/><br />
         {/* <h1 onMouseOver={mouseHoverHandle}>Mouse Hover Test</h1> */}
         <input type="text" onKeyDown={onKeyDown} placeholder="Test keys"/>




      </Container>
    </>
  );
};

export default Header;

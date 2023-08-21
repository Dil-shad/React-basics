import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const Effects = () => {
  const [counter, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, [counter]);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <Button variant="primary" onClick={() => setcount(counter - 1)}>
        <strong>-</strong>
      </Button>{" "}
      &nbsp;
      <Button variant="primary" onClick={() => setcount(counter + 1)}>
        <strong>+</strong>
      </Button>
    </div>
  );
};

export default Effects;

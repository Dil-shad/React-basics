import React, { useState } from "react";

const products = [
  { id: 1, name: "laptop", brand: "Dell", qty: 1 },
  { id: 2, name: "laptop", brand: "HP", qty: 1 },
  { id: 3, name: "laptop", brand: "Acer", qty: 1 },
];

const Keys = () => {
  const [items, setItems] = useState(products); // Changed variable name to match function name
  const changeQty = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updatedItems); // Changed function name to setItems
  };
  return (
    <>
      {items.map((p) => (
        <div className="bg-success text-white m-2" key={p.id}>
          <h1>{p.name}</h1>
          <h3>Brand: {p.brand}</h3> {/* Added a space after the colon */}
          <h4>Qty: {p.qty}</h4> {/* Corrected the label to "Qty" */}
          <button onClick={() => changeQty(p.id)} type="button">
            +
          </button>
        </div>
      ))}
    </>
  );
};

export default Keys;

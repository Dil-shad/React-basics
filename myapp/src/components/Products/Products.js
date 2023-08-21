import React, { useState } from "react";
import { phonesData } from "./product.data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decQty = (id) => {
    const updateItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(updateItem);
  };
  const incQty = (id) => {
    const updateItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updateItem);
  };

  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="shadow bg-body-tertiary rounded  ">
              <div style={{ flex: 1 }}>
                <Card.Img
                  className="p-2"
                  variant="top"
                  src={require(`./assets/${item.image}.webp`)}
                  style={{ height: "14rem", width: "12rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-primary">{item.model}</Card.Title>
                <div
                  className="text-truncate"
                  style={{ maxHeight: "3rem", overflow: "hidden" }}
                >
                  {item.desc}
                </div>
                <h5>price: ₹ {item.price}</h5>
                <p>
                  Qty:
                  <Button className="m-1" onClick={() => decQty(item.id)}>
                    -
                  </Button>
                  {item.qty}
                  <Button className="m-1" onClick={() => incQty(item.id)}>
                    +
                  </Button>
                </p>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;

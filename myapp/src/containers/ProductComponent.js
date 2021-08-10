import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Row } from "react-bootstrap";

import { Col } from "react-bootstrap";
export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Col>
        {" "}
        <Card
          className="m-3"
          style={{ width: "18rem", height: "30rem" }}
          key={id}
        >
          <Card.Img
            variant="top"
            width="171px"
            height="180px"
            title={title}
            src={`${image}`}
          />
          <Card.Body>
            <Link to={`/product/${id}`}>
              <Card.Title>{title}</Card.Title>
            </Link>
            <Card.Text>Price : {price}$</Card.Text>
            <Card.Text>category : {category}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  console.log("Product componnent ", products);
  //   const { id, title } = products[0];
  return (
    <Container>
      <Row>{renderList}</Row>
    </Container>
  );
}

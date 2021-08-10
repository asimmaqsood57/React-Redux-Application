import React from "react";

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
        <Card style={{ width: "18rem" }} key={id}>
          <Card.Img variant="top" title={title} src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>Price : {price}</Card.Text>
            <Card.Text>Price : {price}</Card.Text>
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

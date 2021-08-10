import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../redux/actions/ProductActions";

import { removeSelectedProduct } from "../redux/actions/ProductActions";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function ProdeuctDetails() {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;

  const { productId } = useParams();
  console.log(productId);
  console.log(product);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-4" style={{ width: "18rem" }}>
            <Card.Body>
              <Image src={image} width="400px" height="400px" />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-4" style={{ width: "29rem" }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>

              <Card.Text>{description}</Card.Text>
              <Card.Text>Price : {price}$</Card.Text>
              <Card.Text>category : {category}</Card.Text>
              <Button variant="danger">ADD TO CART</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

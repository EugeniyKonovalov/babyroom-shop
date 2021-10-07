import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { fetchOneProducts } from "../http/productApi";
import { PRODUCT_ROUTE } from "../utils/consts";

const Product = observer(() => {
  const [product, setProduct] = useState({ info: [] });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchOneProducts(id).then((data) => setProduct(data));
  }, [id]);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md={6} className="mt-3 ">
            <Card className="bg-dark">
              <Image
                src={process.env.REACT_APP_API_URL + product.img}
                className="p-1"
              />
            </Card>
          </Col>
          <Col
            md={6}
            className="mt-3 text-light d-flex flex-column  justify-content-between"
          >
            <div>
              <Card.Title className="fs-2   fw-bolder text-uppercase ">
                {product.name}
              </Card.Title>
              <Card.Text className=" flex-grow fs-4 mt-4 fw-bold d-flex align-items-center justify-content-between">
                {product.price} грн.
              </Card.Text>
            </div>
            {product.info.map((info) => (
              <div className=" mb-5">
                <Card.Title
                  key={info.id}
                  className="fs-2 mb-5 fw-light"
                  style={{ color: "rgba(255, 220, 174, 0.5)" }}
                >
                  Модель:
                  {info.title}
                </Card.Title>
                <Card.Title key={info.id} className="fs-5 mb-5 fw-light">
                  {info.description}
                </Card.Title>
              </div>
            ))}

            <Card.Text className=" flex-grow  fw-bold d-flex align-items-center justify-content-end">
              <Button
                className="fs-5 d-flex justify-content-center align-items-center"
                variant="outline-light"
                style={{ width: 200, height: 50 }}
                onClick={() => history.push(PRODUCT_ROUTE)}
              >
                Повернутися
              </Button>
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Product;

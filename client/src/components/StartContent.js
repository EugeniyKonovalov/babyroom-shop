import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { PRODUCT_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
function StartContent() {
  const history = useHistory();
  return (
    <>
      <Container>
        <Row>
          <Col md={5}>
            <Card className="bg-dark mt-3">
              <img src="./img/image/8.jpg" alt="І нехай весь світ..." rounded />
              <Card.ImgOverlay>
                <Card.Title className="d-flex flex-row justify-content-end mt-3 fs-3 fw-lighter text-light ">
                  І нехай весь світ...
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={7}>
            <Card className="d-flex flex-column align-items-center bg-black mt-5">
              <Card.Title className="d-flex flex-column fs-1 fw-light text-light">
                Нова колекція
                <div className="d-flex flex-row justify-content-center">
                  <Button
                    onClick={() => history.push(PRODUCT_ROUTE)}
                    variant="outline-light"
                    className="mt-4 fs-  align-items-center justify-content-center"
                  >
                    Переглянути
                  </Button>
                </div>
              </Card.Title>

              <Row className="d-flex flex-row align-items-center justify-content-center mt-4 ">
                <Col sm={6} className="d-flex flex-row justify-content-center">
                  <Card.Img
                    className="p-1 m-1 bg-secondary"
                    style={{ width: "18rem" }}
                    src="./img/image/11.jpg"
                    height={280}
                    alt="#"
                  />
                </Col>
                <Col sm={6} className="d-flex flex-row justify-content-center">
                  <Card.Img
                    className="p-1 m-1 bg-secondary"
                    style={{ width: "18rem" }}
                    src="./img/image/24.jpg"
                    height={280}
                    alt="#"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default StartContent;

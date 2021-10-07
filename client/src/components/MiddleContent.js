import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";
function MiddleContent() {
  return (
    <>
      <Container>
        <Row>
          <Col md={7}>
            <Card className="bg-black d-flex flex-column align-items-center mt-5">
              <Card.Body className=" mt-5">
                <Card.Title className="fs-1 fw-light text-light fw-light mt-5">
                  Best for your baby!!!
                </Card.Title>
              </Card.Body>
              <Card.Body
                variant="bottom"
                className="d-flex flex-row align-items-center justify-content-center mt-5 "
              >
                <Row className="d-flex flex-row align-items-center justify-content-center mt-3 ">
                  <Col md={10}>
                    <Card className="bg-black">
                      <Card.Title className="p-3 fs-6 fw-light text-light fw-light justify-content-center">
                        Унікальна якість дитячих меблів Baby Room полягає не
                        тільки в сучасній естетиці, найкращому матеріалі та
                        виняткових деталях. Ліжка, письмові столи, лавки та
                        полиці також чудово поєднуються як набори. Оригінальний
                        дизайн є прекрасним прикладом цього.
                      </Card.Title>
                      <NavLink
                        to={PRODUCT_ROUTE}
                        className="d-flex flex-row justify-content-center"
                      >
                        <Button
                          variant="outline-light"
                          className="mt-5 fs-4 justify-content-center align-items-center"
                        >
                          Обери свій дизайн вже зараз...
                        </Button>
                      </NavLink>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="bg-dark mt-3">
              <img
                src="./img/image/13.jpg"
                alt="І нехай весь світ..."
                rounded
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MiddleContent;

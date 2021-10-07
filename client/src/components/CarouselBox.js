import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

function CarouselBox() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={7}>
            <Carousel className="mt-3">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/image/33.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/image/30.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/image/34.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            md={5}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="bg-black">
              <Card.Title className="p-3 fs-2 fw-light text-light fw-light justify-content-center">
                Створіть унікальний куточок...
              </Card.Title>
            </Card>
            <Card className="bg-black d-flex flex-row ">
              <Card.Title className="fs-6 fw-light text-light  fw-light ms-0">
                І ваші діти будуть в захваті!
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CarouselBox;

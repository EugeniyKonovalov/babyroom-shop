import React from "react";
import { Container, Card, Figure, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container>
        <Card className="bg-black text-white mt-5 ">
          <Card.Img src="/img/image/6_footer.jpg" alt="Card image" />

          <Card.ImgOverlay className="text-end d-flex flex-column align-items-start justify-content-center ">
            <Figure className="">
              <Figure.Caption className=" text-light">
                <Card.Title className="fs-3 fw-light">
                  Здійсни свою мрію!..
                </Card.Title>
              </Figure.Caption>
            </Figure>
          </Card.ImgOverlay>
        </Card>
        <Row className=" d-flex  align-items-center justify-content-center">
          <Col md={1} className="d-flex flex-row justify-content-center">
            <Button variant="none">
              <img
                src="../img/facebook.svg"
                width={45}
                height={45}
                alt="Facebook"
                onClick={() => window.open("https://www.facebook.com")}
              />
            </Button>
          </Col>
          <Col md={1} className="d-flex flex-row justify-content-center">
            <Button variant="none">
              <img
                src="../img/youtube.svg"
                width={45}
                height={45}
                alt="YouTube"
                onClick={() => window.open("https://www.youtube.com")}
              />
            </Button>
          </Col>
          <Col md={1} className="d-flex flex-row justify-content-center">
            <Button variant="none">
              <img
                src="../img/instagram.svg"
                width={45}
                height={45}
                alt="Instagram"
                onClick={() => window.open("https://www.instagram.com")}
              />
            </Button>
          </Col>
        </Row>
        <div className=" d-flex flex-row align-items-center justify-content-center text-center text-light ">
          © 2021
        </div>
      </Container>
    </div>
  );
}

export default Footer;

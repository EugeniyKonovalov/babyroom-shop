import React from "react";
import { Card, Figure, Container } from "react-bootstrap";

const HomeBaner = () => {
  return (
    <>
      <Container>
        <Card className="bg-black text-white mt-5 ">
          <Card.Img src="./img/image/6_banner.jpg" alt="Card image" />

          <Card.ImgOverlay className="text-end d-flex flex-column align-items-center justify-content-center ">
            <Figure className="">
              <Figure.Caption className="text-center text-light">
                <Card.Title className="titleBanner fs-1 mt-3">
                  BABY ROOM
                </Card.Title>
                <Card.Text className="titleText">Leopolis</Card.Text>
              </Figure.Caption>
            </Figure>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};

export default HomeBaner;

import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Image, Button, Col, Row } from "react-bootstrap";

const Cart = observer(({ onAddToBasket, onRemoveFromBasket, basketItems }) => {
  const itemsPrice = basketItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <h4 className="mt-3 text-center text-light fs-3">Кошик</h4>
      <Card className="p-1 mt-3 bg-dark " style={{ height: 415 }}>
        <Card.Body
          style={{ background: "rgba(200,200,200,1" }}
          className="d-flex flex-column align-items-center overflow-auto"
        >
          <Row className="d-flex flex-row ">
            <Col md={12}>
              {basketItems.length === 0 && (
                <Card.Title className=" fs-2 fw-light text-dark text-center">
                  Кошик порожній!!!
                </Card.Title>
              )}
              {basketItems.map((item) => (
                <Card
                  key={item.id}
                  style={{
                    width: "auto",
                    background: "rgba(28, 28, 28, 0.97)",
                  }}
                  className="d-flex flex-row mt-1 mb-3 p-1 text-light text-center align-product-center "
                  variant="dark"
                >
                  <Image
                    key={item.id}
                    src={process.env.REACT_APP_API_URL + item.img}
                    rounded
                    width={100}
                    height={100}
                  />
                  <Card.Text
                    key={item.id}
                    className="d-flex flex-column justify-content-start "
                  >
                    <div className="ms-3 mt-2 fs-6 ">{item.name} </div>
                    <div
                      className="mt-3 ms-3 fs-6 fw-bold d-flex  justify-content-between"
                      style={{ color: "rgba(255, 220, 174, 0.5)" }}
                    >
                      {item.price.toFixed(2)} грн.
                    </div>
                  </Card.Text>
                  <Card.Body className="d-flex flex-row align-items-center justify-content-end">
                    <Button
                      variant="outline-dark"
                      className=" my-2 d-flex align-items-center justify-content-center"
                      style={{ width: 20, height: 20 }}
                      onClick={() => onAddToBasket(item)}
                    >
                      <Image src="/img/plus.svg" width={7} height={7} alt="#" />
                    </Button>
                    <div className="m-1 fs-6 d-flex align-items-center">
                      {item.qty}
                    </div>
                    <Button
                      variant="outline-dark"
                      className=" my-2 d-flex align-items-center justify-content-center"
                      style={{ width: 20, height: 20 }}
                      onClick={() => onRemoveFromBasket(item)}
                    >
                      <Image
                        src="/img/minus.svg"
                        width={7}
                        height={7}
                        alt="#"
                      />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Card.Body>
        <Row className="d-flex flex-column align-items-end justify-content-center">
          <Col>
            {basketItems.length !== 0 && (
              <>
                <div className="d-flex flex-row justify-content-between ">
                  <Card.Text className="text-light fs-5  ">Разом: </Card.Text>
                  <Card.Text
                    style={{ borderBottom: "1px dashed white" }}
                    className=" d-flex flex-fill "
                  ></Card.Text>
                  <Card.Title className="text-light">
                    {itemsPrice.toFixed(2)} грн.
                  </Card.Title>
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <Button
                    variant="outline-light"
                    onClick={() => alert("Успішно придбано")}
                  >
                    Оформити замовлення
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
});

export default Cart;

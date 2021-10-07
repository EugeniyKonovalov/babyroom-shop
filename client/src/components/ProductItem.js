import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";

const ProductItem = observer(({ product, onAddToBasket }) => {
  const history = useHistory();

  return (
    <>
      <Card
        key={product.id}
        style={{
          width: "auto",

          background: "rgba(28, 28, 28, 0.97)",
        }}
        className="d-flex mt-3 mb-4 p-1 text-light  justify-content-center"
        variant="dark"
      >
        <Image
          src={process.env.REACT_APP_API_URL + product.img}
          rounded
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() => history.push(PRODUCT_ROUTE + "/" + product.id)}
        />
        <div className="mt-2 fs-6">{product.name} </div>
        <div
          className="mt-2 mb-2 fs-6 fw-bold"
          style={{ color: "rgba(255, 220, 174, 0.5)" }}
        >
          {product.price} грн.
        </div>

        <div className="d-flex justify-content-between">
          <Button
            className="mt-2"
            variant="outline-light"
            onClick={() => onAddToBasket(product)}
          >
            Додати до кошика
          </Button>
        </div>
      </Card>
    </>
  );
});

export default ProductItem;

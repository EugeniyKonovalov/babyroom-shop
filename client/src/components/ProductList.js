import { observer } from "mobx-react-lite";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";
import ProductItem from "./ProductItem";

const ProductList = observer(({ onAddToBasket }) => {
  const { product } = useContext(Context);

  return (
    <>
      <h4 className="mt-3 text-center text-light fs-3">Пропозиції</h4>
      <Row className="d-flex flex-row mt-0">
        {product.products.map((product) => (
          <Col md={4} className="  ">
            <ProductItem
              key={product.id}
              product={product}
              onAddToBasket={onAddToBasket}
            />
          </Col>
        ))}
      </Row>
    </>
  );
});

export default ProductList;

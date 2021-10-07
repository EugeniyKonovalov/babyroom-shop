import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../index";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchProducts, fetchTypes } from "../http/productApi";
import Pages from "../components/Pages";
import Cart from "./Cart";

const Catalog = observer((props) => {
  const [basketItems, setBasketItems] = useState([]);

  const onAddToBasket = (product) => {
    const cart = basketItems.find((x) => x.id === product.id);
    if (cart) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...cart, qty: cart.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, qty: 1 }]);
    }
  };
  const onRemoveFromBasket = (product) => {
    const cart = basketItems.find((x) => x.id === product.id);
    if (cart.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== product.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...cart, qty: cart.qty - 1 } : x
        )
      );
    }
  };
  const { product } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchProducts().then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product]);

  useEffect(() => {
    fetchProducts(
      product.selectedType.id,
      product.selectedBrand.id,
      product.page,
      product.limit
    ).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.selectedType, product.selectedBrand, product, product.page]);
  return (
    <>
      <Container>
        <Row md={9} className="mt-3 ">
          <Col md={12}>
            <TypeBar />
            <BrandBar />
          </Col>

          <Row>
            <Col md={8}>
              <ProductList
                key={product.id}
                product={product}
                onAddToBasket={onAddToBasket}
              />
              <Pages />
            </Col>
            <Col md={4} className="d-flex flex-column mt-0">
              <Cart
                onAddToBasket={onAddToBasket}
                onRemoveFromBasket={onRemoveFromBasket}
                basketItems={basketItems}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
});

export default Catalog;

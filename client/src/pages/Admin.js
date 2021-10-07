import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  return (
    <div>
      <Container className="d-flex flex-column">
        <Row className="d-flex flex-row  align-items-center">
          <Col md={4} className="my-5 d-flex flex-row justify-content-start">
            <Button
              variant="outline-light"
              className="mt-5 fs-2 fw-light"
              style={{ width: 400, height: 150 }}
              onClick={() => setTypeVisible(true)}
            >
              Додати категорію
            </Button>
          </Col>
          <Col md={4} className="my-5 d-flex flex-row justify-content-center">
            <Button
              variant="outline-light"
              className="mt-5 fs-2 fw-light"
              style={{ width: 400, height: 150 }}
              onClick={() => setBrandVisible(true)}
            >
              Додати виробника
            </Button>
          </Col>
          <Col md={4} className="my-5 d-flex flex-row justify-content-end">
            {" "}
            <Button
              variant="outline-light"
              className="mt-5 fs-2 fw-light"
              style={{ width: 400, height: 150 }}
              onClick={() => setProductVisible(true)}
            >
              Додати продукт
            </Button>
          </Col>
        </Row>
        <CreateProduct
          show={productVisible}
          onHide={() => setProductVisible(false)}
        />
        <CreateBrand
          show={brandVisible}
          onHide={() => setBrandVisible(false)}
        />
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      </Container>
    </div>
  );
};

export default Admin;

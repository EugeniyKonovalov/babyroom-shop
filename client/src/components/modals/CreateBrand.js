import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/productApi";
const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="md" className="bg-none">
        <Modal.Header closeButton>
          <Modal.Title>Додати нового виробника</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Введіть назву виробника"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>
            Закрити
          </Button>
          <Button variant="outline-dark" onClick={addBrand}>
            Додати
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateBrand;

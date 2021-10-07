import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from "../../http/productApi";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => setValue(""));
    onHide();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="md" className="bg-none">
        <Modal.Header closeButton>
          <Modal.Title>Додати нову категорію</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Введіть назву категорії"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>
            Закрити
          </Button>
          <Button variant="outline-dark" onClick={addType}>
            Додати
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateType;

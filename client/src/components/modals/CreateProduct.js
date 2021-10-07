import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Dropdown,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { Context } from "../../index";
import { createProduct, fetchBrands, fetchTypes } from "../../http/productApi";
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({ show, onHide }) => {
  const { product } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
  }, [product]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", product.selectedBrand.id);
    formData.append("typeId", product.selectedType.id);
    formData.append("info", JSON.stringify(info));

    createProduct(formData).then((data) => onHide());
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" className="bg-none">
        <Modal.Header closeButton>
          <Modal.Title>Додати новий продукт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="d-flex flex-row align-items-lg-center">
              <Col md={6}>
                <Dropdown className="d-flex flex-row align-items-center justify-content-end">
                  <Dropdown.Toggle variant="dark" className="mt-2 ml-5 ">
                    {product.selectedType.name || "Виберіть категорію"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {product.types.map((type) => (
                      <Dropdown.Item
                        onClick={() => product.setSelectedType(type)}
                        key={type.id}
                      >
                        {type.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={6}>
                {" "}
                <Dropdown className="d-flex flex-row align-items-center justify-content-start">
                  <Dropdown.Toggle variant="dark" className="mt-2">
                    {product.selectedBrand.name || "Виберіть виробника"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    {product.brands.map((brand) => (
                      <Dropdown.Item
                        onClick={() => product.setSelectedBrand(brand)}
                        key={brand.id}
                      >
                        {brand.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <FormControl
              type="text"
              placeholder="Введіть назву!"
              className="mt-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl
              type="number"
              placeholder="Введіть ціну!"
              className="mt-3"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <FormControl
              type="file"
              placeholder="Додайте зображення!"
              className="mt-3"
              onChange={selectFile}
            />
            <hr />
            <Button variant="outline-dark" onClick={addInfo}>
              Додати опис
            </Button>
            {info.map((i) => (
              <Row className="mt-3" key={i.number}>
                <Col md={4}>
                  <FormControl
                    placeholder="Введіть назву моделі..."
                    value={i.title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, i.number)
                    }
                  />
                </Col>
                <Col md={4}>
                  <FormControl
                    placeholder="Введіть опис продукта..."
                    value={i.description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, i.number)
                    }
                  />
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-end">
                  <Button
                    variant="outline-dark"
                    onClick={() => removeInfo(i.number)}
                  >
                    Видалити
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>
            Закрити
          </Button>
          <Button variant="outline-dark" onClick={addProduct}>
            Додати
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default CreateProduct;

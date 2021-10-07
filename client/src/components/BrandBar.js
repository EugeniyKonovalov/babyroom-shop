import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <div>
      <h4 className="mt-3 text-center text-light fs-3 ">Виробник</h4>
      <ListGroup horizontal className="mt-4 mb-3">
        {product.brands.map((brand) => (
          <ListGroup.Item
            className="fs-5"
            action
            variant="dark"
            active={brand.id === product.selectedBrand.id}
            onClick={() => product.setSelectedBrand(brand)}
            key={brand.id}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default BrandBar;

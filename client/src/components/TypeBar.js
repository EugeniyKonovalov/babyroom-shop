import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <div>
      <h4 className="mt-3 text-center text-light fs-3">Категорія</h4>
      <ListGroup horizontal className="mt-4">
        {product.types.map((type) => (
          <ListGroup.Item
            className="fs-5 "
            action
            variant="dark"
            active={type.id === product.selectedType.id}
            onClick={() => product.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;

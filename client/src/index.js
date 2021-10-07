import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);
ReactDOM.render(
  <Context.Provider
    value={{ user: new UserStore(), product: new ProductStore() }}
  >
    <App />
  </Context.Provider>,

  document.getElementById("root")
);

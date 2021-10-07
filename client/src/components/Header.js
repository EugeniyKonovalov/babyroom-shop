import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../index";
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <>
      <Navbar
        className="sticky-top "
        absolute="top"
        collapseOnSelect
        expand="lg"
        style={{ background: "rgba(15, 15, 15, 0.97)" }}
        variant="dark"
      >
        <NavLink
          to={HOME_ROUTE}
          className="brandName text-secondary fs-1 ms-5 me-5"
        >
          BABY ROOM
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex flex-row align-items-center justify-content-center">
            <NavLink to={PRODUCT_ROUTE} className="fs-2 mb-1 text-secondary">
              Каталог
            </NavLink>
          </Nav>
          {user.isAuth ? (
            <Nav
              style={{ alignItems: "center" }}
              className="d-flex flex-row align-items-center justify-content-center me-5 ms-5"
            >
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center me-3 "
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Адмін панель
              </Button>
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center me-3 "
                onClick={() => logOut()}
              >
                Вийти
              </Button>
            </Nav>
          ) : (
            <Nav
              style={{ alignItems: "center" }}
              className="d-flex flex-row align-items-center justify-content-center me-lg-5"
            >
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center  "
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                Авторизація
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
});
export default Header;

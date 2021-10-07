import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card, Container, Button, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Context } from "../index";
import { login, registration } from "../http/userApi";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async (data) => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log(data);
      }

      user.setUser(user);
      user.setIsAuth(true);
      history.push(HOME_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-start "
      style={{ height: window.innerHeight - 92 }}
    >
      <Card
        className="p-3  text-light border-secondary mt-5"
        style={{ width: "35rem", background: "rgba(15, 15, 15, 0.97)" }}
      >
        <Card.Title className="m-auto fs-3">
          {isLogin ? "Авторизація" : "Реєстрація"}
        </Card.Title>
        <Form className="d-flex flex-column">
          <Form.Label className="mb-2">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введіть email..."
            className="mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label className="mb-2">Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введіть пароль..."
            className="mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex flex-collumn justify-content-start align-items-center mt-3">
            {isLogin ? (
              <div
                className="d-flex justify-content-start
               align-items-center"
              >
                Немає облікового запису?
                <NavLink
                  to={REGISTRATION_ROUTE}
                  className="text-info text-decoration-underline "
                >
                  Зареєструватися
                </NavLink>
              </div>
            ) : (
              <div
                className="d-flex justify-content-start
                align-items-center"
              >
                Є обліковий запис?
                <NavLink
                  to={LOGIN_ROUTE}
                  className="text-info text-decoration-underline "
                >
                  Увійти
                </NavLink>
              </div>
            )}

            <Row className="d-flex flex-row  justify-content-end">
              <Button
                variant="outline-light"
                className="mt-1 align-items-center me-0"
                style={{ width: "8rem" }}
                onClick={click}
              >
                {isLogin ? "Вхід" : "Реєстрація"}
              </Button>
            </Row>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;

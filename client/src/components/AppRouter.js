import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
import { HOME_ROUTE } from "../utils/consts";

function AppRouter() {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
}

export default AppRouter;

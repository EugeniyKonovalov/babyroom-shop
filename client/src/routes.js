import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Product from "./pages/Product";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: Product,
  },
  {
    path: PRODUCT_ROUTE,
    Component: Catalog,
  },
];

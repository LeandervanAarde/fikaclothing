import { createBrowserRouter } from "react-router-dom";
import Page from "../../features/Page/Page";
import Home from "../Home/Home.mui";
import Shop from "../Shop/Shop.mui";
import Register from "../Register/Register.mui";
import Product from "../Product/Product.mui";

export const subRoutes = [
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        name: "Home",
        index: true,
        shouldShow: true,
        element: <Home />,
      },
      {
        path: "/shop",
        name: "Shop",
        shouldShow: true,
        element: <Shop />,
      },
      {
        path: "/register",
        shouldShow: false,
        element: <Register />,
      },
      {
        path: "/product/id",
        shouldShow: false,
        element: <Product />,
      },
    ],
  },
];

export const router = createBrowserRouter(subRoutes);

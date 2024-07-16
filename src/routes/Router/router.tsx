import { createBrowserRouter } from "react-router-dom";
import Page from "../../features/Page/Page";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";

export const subRoutes = [
  {
    path: "/",
    element: <Page/>,
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
      {
        path: '/cart',
        shouldShow: false,
        element: <Cart/>
      }
    ],
  },
];

export const router = createBrowserRouter(subRoutes);

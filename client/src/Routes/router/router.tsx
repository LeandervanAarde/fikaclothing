import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainNavigation from "../../features/Navigation/Navigation.mui";
import Page from "../../features/Page/Page";
import Home from "../Home/Home.mui";
import Shop from "../Shop/Shop.mui";
import Register from "../Register/Register.mui";

export const subRoutes = [
  {
    path: "/",
    element: <Page/>,
    children: [
      {
        path: '/',
        name: "Home",
        index: true,
        shouldShow: true,
        element: <Home/>
      },
      {
        path: "/shop",
        name: "Shop",
        shouldShow: true,
        element: <Shop/>
      },
      {
        path: '/register',
        shouldShow: false,
        element: <Register/>
      }
    ]
} 
]


  export const router = createBrowserRouter(subRoutes)
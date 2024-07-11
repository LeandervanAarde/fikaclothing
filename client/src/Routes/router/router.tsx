import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainNavigation from "../../features/Navigation/Navigation.mui";
import Page from "../../features/Page/Page";
import Home from "../Home/Home.mui";
import Shop from "../Shop/Shop.mui";

export const subRoutes = [
  {
    path: "/",
    element: <Page/>,
    children: [
      {
        path: '/',
        name: "Home",
        index: true,
        element: <Home/>
      },
      {
        path: "/shop",
        name: "Shop",
        element: <Shop/>
      }
    ]
} 
]


  export const router = createBrowserRouter(subRoutes)
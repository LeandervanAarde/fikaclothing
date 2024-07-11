import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainNavigation from "../../features/Navigation/Navigation.mui";
import Page from "../../features/Page/Page";
import Home from "../Home/Home.mui";


  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
        children: [
          {
            index: true,
            element: <Home/>
          }
        ]
    }
  ])
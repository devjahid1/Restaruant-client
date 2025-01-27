import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Menu from "../Menu/Menu/Menu";
import Order from "../Order/Order/Order";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/shop',
          element:<Order/>
        }
      ]
    },
  ]);
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Menu from "../Menu/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../DashBoard/Cart/Cart";
import PrivateRoute from "../Routes/PrivateRoute"
import AllUsers from "../Layout/AllUsers";




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
        path:'/shop/:category',
        element:<Order/>,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      },

      //Admin path
      {
        path:'users',
        element:<AllUsers/>
      }
    ]
  }
]);
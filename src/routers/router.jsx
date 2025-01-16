import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import CategoryPage from "../category/CategoryPage";
import ShopPage from "../shop/ShopPage";
import SingleProduct from "../shop/SingleProduct";
import Blog from "../blog/Blog";
import Singleblog from "../blog/Singleblog";
import Search from "../search/Search";
import Contact from "../contact/Contact";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import PrivateRouter from "./PrivateRouter";
import AdminLayout from "../admin/users/adminLayout";
import Dashboard from "../admin/dashboard/Dashboard";
import AddNewProducts from "../admin/addNewProducts/AddNewProducts";
import ManageProducts from "../admin/manageItems/ManageProducts";
import ManageUsers from "../admin/manageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/blog/:id",
        element: <Singleblog/>,
      },
      {
        path: "/search",
        element: <Search/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard/admin",
    element: <PrivateRouter><AdminLayout/></PrivateRouter>,
    children: [
      {
        path: '',
        element: <Dashboard/>
    },
    {
        path: 'add-new-products',
        element: <AddNewProducts/>
    },
    {
        path: 'manage-products',
        element: <ManageProducts/>
    },
    {
        path: 'manage-users"',
        element: <ManageUsers/>
    },
    ]
  }
]);

export default router;

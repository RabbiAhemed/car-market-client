import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blogs from "../pages/Blogs/Blogs";
// import Dashboard from "../pages/Dashboard/Dashboard";
import MyBooking from "../pages/Dashboards/MyBooking/MyBooking";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:category_id",
        element: <Products></Products>,
        loader: async ({ params }) => {
          return fetch(
            `https://server-side-sand.vercel.app/categories/${params.category_id}`
          );
        },
      },
      {
        path: "/articles/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/articles/${params.id}`);
        },
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyBooking></MyBooking>,
      },
    ],
  },
]);

export default router;

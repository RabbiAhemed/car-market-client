import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllUsers from "../pages/AllBuyers/AllBuyers";
import AllSellers from "../pages/AllSellers/AllSellers";
import Blogs from "../pages/Blogs/Blogs";
// import Dashboard from "../pages/Dashboard/Dashboard";
import MyBooking from "../pages/Dashboards/MyBooking/MyBooking";
import MyProducts from "../pages/Dashboards/MyProducts/MyProducts";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import ReportedItems from "../pages/ReportedItems/ReportedItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import Payment from "../pages/Dashboards/Payment/Payment";

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
          return fetch(
            `https://server-side-sand.vercel.app/articles/${params.id}`
          );
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
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>,
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: async ({ params }) => {
          return fetch(
            `https://server-side-sand.vercel.app/bookings/${params.id}`
          );
        },
      },
    ],
  },
]);

export default router;

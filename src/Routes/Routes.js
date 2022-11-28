import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";

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
        path: "/blogs",
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
]);

export default router;

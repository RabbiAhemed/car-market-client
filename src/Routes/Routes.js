import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
        path: "/categories",
        element: <Categories></Categories>,
        loader: async ({ params }) => {
          return fetch("http://localhost:5000/categories");
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

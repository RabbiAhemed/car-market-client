import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Menu from "../pages/shared/Menu.js/Menu";

const Main = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

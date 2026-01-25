import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../public/css/Navigation.css";

const NavigationLayout = () => {
  return (
    <div className="navigation-layout-container">
      <Navbar />
      <section className="content">
        <Outlet />
      </section>
    </div>
  );
};

export default NavigationLayout;

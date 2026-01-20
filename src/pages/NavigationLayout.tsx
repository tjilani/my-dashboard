import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const NavigationLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="content">
        <Outlet />
      </section>
    </div>
  );
};

export default NavigationLayout;

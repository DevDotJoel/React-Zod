import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavbar } from "./main-navbar";

export const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

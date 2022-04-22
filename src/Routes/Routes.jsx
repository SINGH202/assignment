import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Login } from "../components/Login";
import App from "../App";
import { PrivateRoutes } from "./PrivateRoute";
import { Logout } from "../components/Logout";
import { SignUp } from "../components/SignUp";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="products" element={<Product />}>
            
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="signup" element={<SignUp/>}/>
        <Route path="*" element={<h2>404 Element not found</h2>} />
      </Route>
    </Routes>
  );
};

export default RouteComponent;
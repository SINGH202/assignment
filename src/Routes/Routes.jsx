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
import {Cart} from "../components/Cart"
import { SingleProduct } from "../pages/SingleProduct";
import { ForgetPassword } from "../components/ForgetPassword";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetPassword" element={<ForgetPassword/>}/>
        <Route path="*" element={<h2>404 Element not found</h2>} />
      </Route>
    </Routes>
  );
};

export default RouteComponent;

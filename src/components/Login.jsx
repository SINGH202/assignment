import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import {Navigate, useNavigate} from "react-router-dom"
import { Dashboard } from "./Dashboard";
import styles from "./Login.module.css";

export const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { isAuth, err, token, handleAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(state.email, state.password);
  };
  console.log(isAuth, "isAuth");
  return (
    <>
      {!token ? (
        <>
          {" "}
          <form
            className={styles.login_form}
            style={{ backgroundColor: theme.backgroundColor }}
            onSubmit={handleSubmit}
          >
            <h1 style={{ color: theme.textcolor }}>Login</h1>
            <input
              placeholder="Enter Email"
              value={state.email}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
            <input
              placeholder="Enter Password"
              value={state.password}
              onChange={(e) => {
                setState({ ...state, password: e.target.value });
              }}
            />
            <input type="submit" value="submit" />
          </form>
          {err && <h1>Wrong Credentials</h1>}
        </>
      ) : <Navigate to={"/products"} />}
    </>
  );
};
// export { Login };

import React from "react";
import axios from "axios";

const AuthContext = React.createContext({ name: "santhi" });
console.log(AuthContext); //provider ,consumer

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const [token, setToken] = React.useState("");
  const handleAuth = (username, password) => {
    console.log(username, password)
    axios({
      method: "post",
      url: "https://ecommerce-backend-singh202.herokuapp.com/api/auth/login",
      data: {
        username,
        password
      }
    })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.accessToken);
        setAuth(true);
        console.log(isAuth)
      })
      .catch((err) => {
        console.log("hellow");
        setAuth(false);
        setErr(true);
      }).finally(() =>{console.log(isAuth)})
  };

  const handleLogout = () =>{
    setToken("");
    setAuth(false)
  }

  // console.log(children);
  AuthContext.displayName = "Auth_Context";
  const value = { isAuth, err, token, handleAuth, handleLogout };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };

// const contextcreate  = React.crateConetxt()

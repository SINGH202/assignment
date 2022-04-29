import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";
export const Cart = () => {
  const { userId, token } = useContext(AuthContext);
  console.log(token)
  const api = `https://ecommerce-backend-singh202.herokuapp.com/api/cart/find/${userId}`
  const getCart = () => {
    axios(api , { headers: {"token" : `Bearer ${token}`} })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <h1>Cart page</h1>
    </div>
  );
};

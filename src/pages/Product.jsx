import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { SingleProduct } from "./SingleProduct";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://ecommerce-backend-singh202.herokuapp.com/api/products";

  const getProduct = () => {
    setLoading(true);
    axios({
      method: "get",
      url: api,
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <h2>Welcome to Product-Page</h2>
      {loading && <h2>Loading.....</h2>}
      <div className="booksDiv">
        {!loading &&
          data &&
          data.map((item, index) => {
            return (<SingleProduct
                key={item._id}
                id={item._id}
                title={item.title}
                img={item.img}
                desc={item.desc}
                price={item.price}
                navigate={navigate}
              />
            );
          })}
      </div>
      <hr />
    </>
  );
};

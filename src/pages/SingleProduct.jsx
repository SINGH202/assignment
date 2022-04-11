import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <>
      <h1>Single Product</h1>
      {data && (
        <div>
          {" "}
          <h2>{data.title}</h2>
          <img src={data.image} alt="" width={"100px"} />
          <h4>{data.description}</h4>
        </div>
      )}
    </>
  );
};

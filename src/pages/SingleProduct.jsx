import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router"


export const SingleProduct = ({id, title, img, desc, price}) => {
  const navi = useNavigate();

  const handleNav = () =>{
    // navi(`/products/${id}`)
    console.log(id)
  }


  return (
    <div key={id}>

        <h3> {title}</h3>
        <img src={img} alt={title} />
        <h4>Author : {desc}</h4>
        <h5>Price : {price}</h5>
        <Button variant="contained" onClick={handleNav}>Add to cart</Button>
    </div>
  );
};

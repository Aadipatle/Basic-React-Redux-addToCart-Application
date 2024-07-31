import React, { useEffect, useState } from "react";
import { addCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import Item from "../components/Item";
function Product2() {
  
   
  let Cart = JSON.parse(localStorage.getItem('cart')) || []

 
  return (
    <>
    {
      Cart.map((e,i)=>{
        return <Item id={i} name={e.title} category={e.category} />
      })
    }
    </>
  );
}

export default Product2;

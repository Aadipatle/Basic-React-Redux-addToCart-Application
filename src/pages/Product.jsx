import React, { useEffect, useState } from "react";
import { addCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import Item from "../components/Item";
function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function find() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    }
    find();
  }, []); 
  console.log(product);
  function addCartfn(product) {
    dispatch(addCart(product));
  const exist = JSON.parse(localStorage.getItem('cart')) || [];

    const newProduct = [...exist, product]
    localStorage.setItem('cart', JSON.stringify(newProduct));

  }
  return (
    <>
    {
      product.map((e,i)=>{
        return <Item id={i} name={e.title} />
      })
    }
    </>
  );
}

export default Product;

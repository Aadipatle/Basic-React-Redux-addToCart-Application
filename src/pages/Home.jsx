import React, { useEffect, useState } from "react";
import { addCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import Item from "../components/Item";
function Home() {
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 250px 250px",
        alignContent: "center",
        gap: "20px",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        marginTop: "15px",
      }}
    >
    {product.map((item) => (
      <div
        key={item.id}
        className="product"
        style={{
          backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <img src={item.image} alt="" style={{ width: "150px" }} />
        <div style={{}}>
          <h2 style={{ margin: "0" }}>{item.title}</h2>
          <h3 style={{ margin: "0" }}>price: ${item.price}</h3>
          <button
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              padding: "5px",
            }}
            onClick={() => addCartfn(item)}
          >
            AddToCart
          </button>
        </div>
        </div>
      ))}
      
    </div>
    </>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let Cart = JSON.parse(localStorage.getItem('cart')) || []

  const product = useSelector(state=>state.reducer)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "100px",
        backgroundColor: "blueviolet",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <Link to={"/home"}
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "22px",
          }}
        >
          TECH-SHOPPY
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
        }}
      >
        
        <Link
          to={"/mens"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "500",
            fontSize: "22px",
          }}
        >
          {" "}
          Mens
        </Link>
        <Link
          to={"/womens"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "500",
            fontSize: "22px",
          }}
        >
          {" "}
          Womens
        </Link>
        <Link
          to={"/kids"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "500",
            fontSize: "22px",
          }}
        >
          {" "}
          Kids
        </Link><Link
        to={"/cart"}
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "500",
          fontSize: "22px",
        }}
      >
        {" "}
        Cart <span style={{backgroundColor:'black', borderRadius:'50%', padding:'4px'}}>{Cart.length}</span>
      </Link>
        
       
      </div>
    </div>
  );
}

export default Navbar;

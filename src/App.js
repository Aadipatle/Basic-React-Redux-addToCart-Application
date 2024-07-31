import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import MyForm from "./pages/MyForm";
import Cetegory from "./pages/Cetegory";
import Product2 from "./pages/Product2";
import Protected from "./Protected";

function App() {
  return (
    <>
  
      <BrowserRouter>
      <Navbar /> 
        <Routes>
        <Route element={<h1>Welcome to techShop</h1>} path="/" /> 
        <Route element={<MyForm />} path="/login" /> 
        <Route element={<Protected/>} >
        <Route element={<Home />} path="/home" /> 
        <Route element={<Cart />} path="/cart" /> 
        <Route element={<Cetegory name='Aadi patle' category="men's clothing" />} path="/mens" />
        <Route element={<Cetegory name='Patle' category="women's clothing" />} path="/womens" />
        <Route element={<Cetegory name='Aadi' category="electronics" />} path="/kids" />
        <Route element={<Product />} path="/product" /> 
        <Route element={<Product2 />} path="/product2" />
        </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// import React from 'react'
// import { useState } from 'react';
// function DisplayLoggedOut() {
//     return (
//         <div style={{ background: 'green' }}>
//             <h1 style={{ color: 'white' }}> Please Login</h1>
//         </div>
//     )
// }
// function DisplayLoggedIn() {
//     return (
//         <div >
//             <div style={{ background: 'green' }}>
//                 <h1 style={{ color: 'white' }}> You are Logged In</h1>
//             </div>
//             <h3>List of Students</h3>
//             <div style={{ display: 'inline' }}>
//                 <table hover >
//                     <thead >
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Address</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>Muskan</td>
//                             <td>Roomie</td>
//                             <td>Lucknow</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <form action="">
//             <textarea name="" id="" cols="30" rows="10"></textarea></form>
//             <button>Send</button>
//         </div>
//     )
// }
// function Rendering() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const handleLoginButton = () => {
//         if (isLoggedIn) {
//             setIsLoggedIn(false);
//         }
//         else {
//             setIsLoggedIn(true);
//         }
//     }
//     return (
//         <div>
            
//             {isLoggedIn === false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
//             <button onClick={handleLoginButton} className="btn btn-primary">
//                 {isLoggedIn === false ? 'Log In' : 'Log Out'}
//             </button>
//         </div>
//     )
// }
// function App() {
//     return (
//         <div className="App">
//             <Rendering />
//         </div>
//     );
// }
// export default App;

import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFn } from '../features/cartSlice'

function Cart() {

  const dispatch = useDispatch()
  let Cart = JSON.parse(localStorage.getItem('cart')) || []
  console.log(Cart)

  function remove(item){
    // Cart.filter((arrow) => arrow.id !== e.id);
     Cart = Cart.filter(i => i.id !== item.id)
    console.log(Cart)
  }
 

  return (
    <div>
  
      { Cart.map((e,id) => (
        <>
        <h1 key={e.id}>{e.price}</h1>
        <button onClick={()=>remove(e)}>delete</button>
        </>
      ))}
   
    </div>
  )
}

export default Cart
import React from 'react'

function Item(props) {
  return (
    <div>
    <h3 key={props.id} >{props.name}</h3>
    <p>{props.category}</p>
    </div>
  )
} 

export default Item
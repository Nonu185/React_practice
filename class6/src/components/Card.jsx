import React from 'react'

const Card = (props) => {

    let clr1 = Math.floor(Math.random()*256)
    let clr2 = Math.floor(Math.random() * 256);
    let clr3 = Math.floor(Math.random() * 256);
  return (
    <div style={{ backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='user-card'>
      <h2>{props.elem.name}</h2>
      <p>{props.elem.email}</p>
    </div>
  )
}

export default Card

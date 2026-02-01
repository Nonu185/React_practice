import React from 'react'

const Card = (props) => {
   
  return (
    <div className='bg-white rounded px-5 py-3 w-fit m-2'>
    <h1>{props.user}{props.age}</h1>
    </div>
  )
}

export default Card

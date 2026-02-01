import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-red-500 m-2 py-3 w-fit font-bold text-lg px-5 rounded text-white '>
      {props.text}
    </div>
  )
}

export default Button

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const nevigate = useNavigate()
  return (
    <div className='foot'>
      <h3>Footer</h3>
      <button
      onClick={()=>{
        nevigate('/cources')
      }}
      >Explore allcources</button>
    </div>
  )
}

export default Footer

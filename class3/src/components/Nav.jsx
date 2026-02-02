import React from 'react'

const Nav = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className=" mb-1 flex justify-between items-center  px-8 py-3 text-white">
      <h1 className="font-bold text-2xl ">{props.user}</h1>
      <div className='flex gap-10'>
        {props.links.map(function (elem) {
            return <h4>{elem}</h4>
        })}
      </div>
    </div>
  );
}

export default Nav

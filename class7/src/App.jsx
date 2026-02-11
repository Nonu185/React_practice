import { useEffect } from "react"
import { useState } from "react"
import React from 'react'


const App = () => {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [num3, setnum3] = useState(0)

  useEffect(function(){
  console.log('useeffect is working');
  
  },[num1])


  return (
    <div>
      <h2>{num1}</h2>
      <button
        onClick={() => {
          setnum1(num1 + 1);
        }}
      >
        increse
      </button>
      <br /><br />

      <h2>{num2}</h2>
      <button
        onClick={() => {
          setnum2(num2 + 1);
        }}
      >
        increse
      </button>
      <br /><br />

      <h2>{num3}</h2>
      <button
        onClick={() => {
          setnum3(num3 + 1);
        }}
      >
        increse
      </button>
    </div>
  );
}

export default App

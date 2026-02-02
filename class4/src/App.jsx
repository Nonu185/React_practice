import React, { useState } from 'react'

const App = () => {
const [marks, setmarks] = useState([40,45,50,29,31,23,91])

function gracestudent (){
  let newmark = marks.map(function(elem){
  return elem+5
  })
  setmarks(newmark)
}

  return (
    <div>
     {marks.map(function(elem,idx){
      return <h1 key={idx}>Students {idx+1} = {elem}  ({elem>33 ? 'pass':'Fail'})</h1>
     })}

      <button onClick={gracestudent}>Give grace</button>
    </div>
  )
}

export default App

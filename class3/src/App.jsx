import React from 'react'
import Nav from './components/Nav'
const App = () => {
  function btnclick (a){
    console.log('Button clicket !!!',a);
    
  }
  return (
    <div>
    <button
    onClick={()=>{
      btnclick(10)
    }}

    className=' active:scale-95 bg-emerald-700 px-8 py-4 m-2 rounded '
    >
   Click to download
    </button>
    </div>
  );
}

export default App

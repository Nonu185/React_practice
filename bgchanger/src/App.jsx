import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('gray');
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2 ">
        <div className="flex flex-wrap gap-4 justify-center px-3 py-2 bg-white rounded-3xl shadow-lg">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-lg active:scale-90 transition-all"
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full bg-blue-500 text-white shadow-lg active:scale-90 transition-all"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg active:scale-90 transition-all "
          >
            Green
          </button>
          <button
            onClick={() => setcolor("crimson")}
            className="outline-none px-4 py-1 rounded-full bg-red-400 text-white shadow-lg active:scale-90 transition-all"
          >
            Crimson
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full bg-yellow-500 text-white shadow-lg active:scale-90 transition-all"
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-4 py-1 rounded-full bg-purple-500 text-white shadow-lg active:scale-90 transition-all"
          >
            Purple
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-1 rounded-full bg-orange-500 text-white shadow-lg active:scale-90 transition-all"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App

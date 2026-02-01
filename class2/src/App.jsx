
import React from 'react'
import Card from "./component/card";


const App = () => {
  return (
    <div className="bg-black p-10 h-screen  ">
      <Card user="nonu" age="20" />
      <Card user="no" age="20" />
      <Card user="yess" age="20" />
      <Card user="non" age="20" />
      <Card user="nonu" age="20" />
    </div>
  );
}

export default App

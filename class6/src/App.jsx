import React from 'react'
import axios from "axios";
import {useState} from 'react'
import Card from './components/Card';
import { useEffect } from 'react';

const App = () => {
  const [alluser, setalluser] = useState([])
 const getdata = async () => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
   setalluser(response.data)
   
 }
 useEffect(function (){
  getdata()
 },[])

  return (
    <div>
      
      <div className="all-cards">
        {alluser.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Card elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App

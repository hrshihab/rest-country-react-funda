import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [desh,setDesh]=useState([]);
  useEffect(()=>{
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
    .then(res=> res.json())
    .then(data => setDesh(data))
  },[])

  return (
    <div>
      <h2>Coutry Length : {desh.length}</h2>
      {
        desh.map((list)=>
         
          <Country list = {list}></Country>
          
          )
      }
    </div>
  );
};

export default Home;
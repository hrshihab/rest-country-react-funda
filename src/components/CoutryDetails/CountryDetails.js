import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import CountryDetails2 from './CountryDetails2';

const CountryDetails = () => {
  const {countryName}=useParams();
const [countryDetails,setCountryDetails] = useState([]);
useEffect(()=>{
  const url = `https://restcountries.com/v3.1/name/${countryName}`
  fetch(url)
  .then(res => res.json())
  .then(data=>setCountryDetails(data))
},[])
  return (
    <div>
    {
      countryDetails.map((pd)=>
        <CountryDetails2 list = {pd}></CountryDetails2>
      
        
        
      )
    }
    </div>
  );
};

export default CountryDetails;
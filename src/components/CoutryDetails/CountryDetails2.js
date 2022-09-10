import React from 'react';

const CountryDetails2 = (props) => {
  const {capital,name,area,population,independent,flags} =props.list;
  return (
    <div style={{marginTop:"30px",color:"orange"}}>
     <img src={flags.png} alt="" srcset="" />
      <h1>{name.common}</h1>
      <h3>Capital : {capital}</h3>
      <h3>Area : {area} sq.</h3>
      <h4>Population : {population}</h4>
      <h4>Independent : {independent.toString()}</h4>
    </div>
  );
};

export default CountryDetails2;
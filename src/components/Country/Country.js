import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Country.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
const Country = (props) => {
  const {name,flags,capital} = props.list;
  let countryName = name.common;
  // navigate alternative of link
const navigate = useNavigate();
const handleNavigate=(cName)=>{
  const url = `/country/${cName}`
  navigate(url);
}

  return (
    <div className="container ">
      <Card className="cardStyle" style={{ width: "28rem" }}>
        <Card.Img  variant="top" src={flags.png} />
        <Card.Body>
          <Card.Title>{countryName}</Card.Title>
          <Card.Text>
            Capital : <strong>
            {capital}
              </strong>

          </Card.Text>

         <Link to={`/country/${countryName}`}>

         <Button variant="primary">Go Details</Button>

         </Link>
         

         {/* <button onClick={()=>handleNavigate(countryName)}>Check</button> */}

          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;

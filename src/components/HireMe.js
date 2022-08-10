import React from "react";
import hills from "../images/hills.jpg";
import "../CSS/HireMe.css";

function HireMe() {
  return (
    <div className='container'>
      <h1>Hire Me :)</h1>
      <img src={hills} alt='Hills' />
    </div>
  );
}

export default HireMe;

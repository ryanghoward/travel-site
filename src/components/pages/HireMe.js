import React from "react";
import "../../CSS/HireMe.css";
import Resume from "../../images/Ryan G. Howard Resume 2022.pdf";

export default function HireMe() {
  return (
    <div className='container'>
      <div className='hireme'>
        <h1>Hire Me 😁</h1>
        <a href={Resume} target='_blank' rel='noreferrer'>
          Click For Resume
        </a>
      </div>
    </div>
  );
}

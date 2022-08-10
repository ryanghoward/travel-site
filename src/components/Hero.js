import React from "react";
import { Button } from "./Button";
import "../CSS/Hero.css";

function Hero() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What Are You Waiting For?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/hireme'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;

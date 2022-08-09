import React from "react";
import CardItem from "./CardItem";
import "../CSS/Cards.css";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the epic destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explore The Hidden Waterfalls Deep Within The Amazon Rain Forrest'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel Through The Islands Of Bali On A Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Set Sail On The Atlantic Ocean As You Traverse Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Play Familiar Games In Unfamiliar Environments'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img8}
              text='Take A Ride Through The Sahara Desert On A Guided Camel Back Tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

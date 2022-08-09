import React from "react";
import CardItem from "./CardItem";
import "../src/CSS/Cards.css";
import img9 from "../src/images/img-9.jpg";
import img2 from "../src/images/img-2.jpg";
import img3 from "../src/images/img-3.jpg";
import img4 from "../src/images/img-4.jpg";
import img8 from "../src/images/img-8.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the epic destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explore the hidden waterfalls deep within the Amazon Rain Forrest'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the islands of Bali on a private cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Set sail on the Atlantic Ocean as you traverse uncharted waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Play familiar games in unfamiliar environments'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img8}
              text='Take a ride through the Sahara Desert on a guided Camel-back tour'
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

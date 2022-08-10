import React from "react";
import CardItem from "./CardItem";
import "../CSS/Cards.css";
import amazon from "../images/amazon.jpg";
import islands from "../images/islands.jpg";
import sailing from "../images/sailing.jpg";
import mountain from "../images/mountain.jpg";
import culture from "../images/culture.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Where Do You Want To Go?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={amazon}
              text='Explore The Amazon Rain Forrest'
              label='Adventure'
              path='/hireme'
            />
            <CardItem
              src={islands}
              text='Find Peace In Paradise'
              label='Relaxation'
              path='/hireme'
            />
            <CardItem
              src={sailing}
              text='Set Sail On The Open Seas'
              label='Mystery'
              path='/hireme'
            />
            <CardItem
              src={mountain}
              text='Climb To The Top Of The World'
              label='Challenge'
              path='/hireme'
            />
            <CardItem
              src={culture}
              text='Experience A New Culture'
              label='Culture'
              path='/hireme'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

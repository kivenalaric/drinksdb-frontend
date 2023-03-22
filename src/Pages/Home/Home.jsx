/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../../Components/Header/Header';
import HomeCss from './Home.module.css';
import SideBar from './sideBar/SideBar';
import data from '../../drinksdb';

function Drinks() {
  return (
    <div className={HomeCss.main}>
      <div className={HomeCss.left}>
        <SideBar />
      </div>
      <div className={HomeCss.right}>
        <div className={HomeCss.head}>
          <Header />
        </div>
        <div className={HomeCss.right_drinks}>
          {data.map((drinks) => {
            return (
              <div key={drinks.name} className={HomeCss.drink_card}>
                <img
                  src={drinks.imageUrl}
                  alt="drinks"
                  className={HomeCss.images}
                />
                <h2>{drinks.name}</h2>
                <p>{drinks.description}</p>
                <p>{drinks.ingredients}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drinks;

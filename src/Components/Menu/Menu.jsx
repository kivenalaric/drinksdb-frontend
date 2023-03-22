import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCss from './Menu.module.css';

function Menu() {
  const navigate = useNavigate;

  const toHome = () => {
    navigate('/');
  };

  const toDrinks = () => {
    navigate('/drinks');
  };
  return (
    <div>
      <div className={MenuCss.menu}>
        <button type="button" onClick={toHome}>
          Home
        </button>
        <button type="button" onClick={toDrinks}>
          Our Drinks
        </button>
        <button type="button">LogOut</button>
      </div>
    </div>
  );
}

export default Menu;

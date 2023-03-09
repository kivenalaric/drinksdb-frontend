/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import UseContext from '../../context';
import HeaderCss from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate('/register');
  };
  const toHome = () => {
    navigate('/');
  };
  const toLogin = () => {
    navigate('/login');
  };
  return (
    <div className={HeaderCss.main}>
      <div className={HeaderCss.header}>
        <div className={HeaderCss.header_left}>
          <h1>dRinksDB</h1>
        </div>
        <div className={HeaderCss.header_right}>
          <button type="button">Our Drinks</button>
          <button type="button" onClick={toHome}>
            Home
          </button>
          <button type="button" onClick={toSignUp}>
            SignUp
          </button>
          <button type="button" onClick={toLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

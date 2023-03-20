import React from 'react';
import Header from '../../Components/Header/Header';
import LandingCss from './Landing.module.css';

function Landing() {
  return (
    <div className={LandingCss.main}>
      <div className={LandingCss.head}>
        <Header />
      </div>
      <div className={LandingCss.body}>
        <div className={LandingCss.welcome}>
          <h2>
            Welcome To The <span>dRinksDB</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            necessitatibus suscipit voluptas in excepturi architecto sunt
            dolorem neque officiis pariatur est saepe itaque non, odit
            veritatis? Laudantium, neque? Numquam, et. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illum aspernatur laborum sequi
            voluptas repellat. Aliquid hic ab perferendis dolor. Praesentium
            placeat pariatur exercitationem ea rerum nisi nam soluta delectus
            animi?
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1568644396922-5c3bfae12521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8RHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="people drinking"
        />
      </div>
    </div>
  );
}

export default Landing;

/* eslint-disable prettier/prettier */
import React from 'react';
// import MyContext from '../../../context';
import SideBarCss from './Sidebar.module.css';

function SideBar() {
  // const { data2 } = useContext(MyContext);
  return (
    <div className={SideBarCss.main}>
      <div>
        <h3 className={SideBarCss.categories_head}>Drink Categories</h3>
        <hr className={SideBarCss.categories_hr} />
        <div className={SideBarCss.drink_sec}>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Whiskey</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Beer</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Wine</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Local</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Water</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Local</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Cocktail</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Juice</p>
          </div>
          {/* <li>Whiskey</li>
            <li>Beer</li>
            <li>Wine</li>
            <li>Water</li>
            <li>Local</li>
            <li>Juice</li>
            <li>Cocktail</li> */}
        </div>
      </div>
      <div>
        <h3 className={SideBarCss.categories_head}>Drink Glasses</h3>
        <hr className={SideBarCss.categories_hr} />
        <div className={SideBarCss.drink_sec}>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Long</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Medium</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Small</p>
          </div>
          {/* <li>Long</li>
            <li>Medium</li>
            <li>Small</li> */}
        </div>
      </div>
      <div>
        <h3 className={SideBarCss.categories_head}>Drink Ingredients</h3>
        <hr className={SideBarCss.categories_hr} />
        <div>
          <ul>
            {/* <li>Maize</li>
            <li>Water</li>
            <li>Sugar</li>
            <li>Barley</li> */}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={SideBarCss.categories_head}>Is Alcoholic?</h3>
        <hr className={SideBarCss.categories_hr} />
        <div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>Yes</p>
          </div>
          <div className={SideBarCss.drink_properties}>
            <input type="checkbox" />
            <p>No</p>
          </div>
          <ul>
            {/* <li>Yes</li>
            <li>No</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import React from "react";

import "./Menu.css";

// import { GoLocation } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="container">
      <div className="nav">
        <ul>
          <li>
            <a href="/#">دسته بندی کالا</a>
          </li>
          <li>
            <a href="/#">سوپر مارکت</a>
          </li>
          <li>
            <a href="/#">پر فروش ترین</a>
          </li>
          <li>
            <a href="/#">تخفیف و پیشنهادها</a>
          </li>
        </ul>
      </div>
      <div className="city">
  
        لطفا شهر خود را انتخاب کنید.
      </div>
    </div>
  );
};

export default Menu;

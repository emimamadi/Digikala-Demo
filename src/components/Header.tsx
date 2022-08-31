import React from "react";

import "./Header.css";

import { FaCartPlus } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="ads">
        <h3>خرید امسال با قسمت پارسال </h3>
      </div>
      <div className="navigation">
        <div className="logo-search">
          <h1>digikala</h1>
          <input
            type="search"
            name=""
            id=""
            value=" جستجو "
            className="search"
          />
        </div>
        <div className="sign-basket">
          <button className="btn">
            <i>
              <FaSignInAlt className="sign" />
            </i>
            <span>ورود | ثبت نام</span>
          </button>
          |
          <i className="shopping">
            <FaCartPlus />
          </i>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;

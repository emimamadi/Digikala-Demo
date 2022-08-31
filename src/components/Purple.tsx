import React from "react";

import './Purple.css'

const Purple = () => {
  return (
    <div className="wrap">
      <div className="wrap-cont">
        <div className="memeber">
          <h2>digiplus</h2>
          <h4>خدمات ویژه برای اعضای دیجی پلاس</h4>
          <button className="btnMember">عضویت</button>
        </div>
        <div className="naghdi">
          <div className="header">
            <h4>هدیه نقدی</h4>
            <h6>مشاهده همه</h6>
          </div>
          <div className="content">
            <img src={"3.jpg"} alt="" />
            <img src={"2.jpg"} alt="" />
            <img src={"88.jpg"} alt="" />
            <img src={"3.jpg"} alt="" />
          </div>
        </div>
        <div className="fori">
          <div className="header">
            <h4>ارسال فوری</h4>
            <h6>مشاهده همه</h6>
          </div>
          <div className="content">
            <img src={"3.jpg"} alt="" />
            <img src={"2.jpg"} alt="" />
            <img src={"88.jpg"} alt="" />
            <img src={"3.jpg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purple;

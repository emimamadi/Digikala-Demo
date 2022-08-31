import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-head">
          <h1>دیجی کالا</h1>
          <small>تلفن پشتیبانی: 615615151   |     7روز هفته </small> 
        </div>
        <button className="btn-footer" >
          <a href="#header">بازگشت به بالا </a>
        </button>
      </div>

      <div className="icon-bar">
        <div className="icon">
          <img src={"88.jpg"} alt="" />
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div className="icon">
          <img src={"88.jpg"} alt="" />
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div className="icon">
          <img src={"88.jpg"} alt="" />
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div className="icon">
          <img src={"88.jpg"} alt="" />
          <p>امکان تحویل اکسپرس</p>
        </div>
      </div>

      <div className="foot-grid">
        <div className="digikala">
          <h5>با دیجی کالا</h5>
          <ul>
            <li>
              <a href="#/">اتاق خبر دیجی کالا</a>
            </li>
            <li>
              <a href="#/">فروش در دیجی کالا</a>
            </li>
            <li>
              <a href="#/">فرصت های شغلی</a>
            </li>
          </ul>
        </div>

        <div className="khedmat">
          <h5>خدمات مشتریان</h5>
          <ul>
            <li>
              <a href="#/">پاسخ به پرسش های متداول</a>
            </li>
            <li>
              <a href="#/">رویه های بازگرداندن کالا</a>
            </li>
            <li>
              <a href="#/">شرایط استفاده</a>
            </li>
          </ul>
        </div>

        <div className="rahnama">
          <h5>راهنما خرید از دیجی کالا</h5>
          <ul>
            <li>
              <a href="#/">نحوه ثبت سفارش</a>
            </li>
            <li>
              <a href="#/">رویه ارسال سفارش</a>
            </li>
            <li>
              <a href="#/">شیوه های پرداخت</a>
            </li>
          </ul>
        </div>
        <div className="hamrah">
          <h4>همراه ما باشید.</h4>
          <div className="social"></div>
          <h4>با ثبت ایمیل ، از جدیدترین تخفیفات با خبر شوید.</h4>
          <input type="text" />
          <input type="submit" value={"ثبت"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

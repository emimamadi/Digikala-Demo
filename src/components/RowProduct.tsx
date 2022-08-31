import React from "react";
import "./rowProduct.css";

const RowProduct = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>دیجی کالا جت</h5>
        </div>
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>دیجی استایل</h5>
        </div>
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>دیجی پی</h5>
        </div>
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>دیجی کالا مهر</h5>
        </div>
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>دیجی کالا</h5>
        </div>
        <div className="card-box">
          <img src={"88.jpg"} alt="" />
          <h5>بیشتر</h5>
        </div>
      </div>
    </div>
  );
};

export default RowProduct;

import React from "react";
import Bazdid4Col from "../components/Bazdid4Col";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import FourCol from "../components/FourCol";
import Header from "../components/Header";
import Porforoush from "../components/Porforoush";
import Purple from "../components/Purple";
import RowProduct from "../components/RowProduct";
import Selection from "../components/Selection";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import SliderSugg from "../components/SliderSugg";
import TwoCol from "../components/TwoCol";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider1 />
      <RowProduct />
      <Slider2 />
      <FourCol />
      <Categories />
      <TwoCol />
      <SliderSugg />
      <TwoCol />
      <Bazdid4Col />
      <Purple />
      <Bazdid4Col />
      <Porforoush />
      <Selection />
      <Footer />
    </div>
  );
};

export default Home;

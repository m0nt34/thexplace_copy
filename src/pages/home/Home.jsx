import React from "react";
import VideoBox from "./VideoBox";
import style from "../../assets/styles/pages/home/home.module.scss";
import Brands from "../../components/Brands";
import { Introduction } from "./Headers";
import Cards from "./cards/Cards";
import SmallCards from "./SmallCards";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className={style.home_cont}>
      <VideoBox />
      <div className={style.bottom_cont}>
        <Brands />
        <Introduction />
        <Cards />
        <SmallCards/>
        <Carousel/>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import VideoBox from "./VideoBox";
import style from "../../assets/styles/pages/home/home.module.scss";
const Home = () => {
  return (
    <div className={style.home_cont}>
      <VideoBox />
    </div>
  );
};

export default Home;

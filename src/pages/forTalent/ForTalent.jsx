import React from "react";
import style from "../../assets/styles/pages/forTalent/forTalent.module.scss";
import ImgCarousel from "../../components/imgCarousel";
import { Header1, Header2 } from "./Headers";
import Brands from "../../components/Brands";
import Cards from "./Cards";
import FuturePlan from "./FuturePlan";
import Questions from "./Questions/Questions";
const ForTalent = () => {
  return (
    <div className={style.forTalent}>
      <div className={style.inside_cont}>
        <ImgCarousel />
        <div>
          <Header1 />
          <Brands />
        </div>
        <Cards />
        <div>
          <Header2 />
          <FuturePlan />
        </div>
        <Questions/>
      </div>
    </div>
  );
};

export default ForTalent;

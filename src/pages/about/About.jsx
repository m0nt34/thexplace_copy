import React from "react";
import style from "../../assets/styles/pages/about/about.module.scss";
import { Header1, Header2, Header3 } from "./Headers";
import Cards from "./Cards";
import Advirtizement from "./Advirtizement";
const About = () => {
  return (
    <div className={style.about_cont}>
      <div className={style.inside_cont}>
        <Header1 />
        <Header2 />
        <Cards />
        <Advirtizement />
        <Header3/>
      </div>
    </div>
  );
};

export default About;

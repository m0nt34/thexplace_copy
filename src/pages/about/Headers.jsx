import React from "react";
import style from "../../assets/styles/pages/about/about.module.scss";
import GradientText from "../../components/GradientText";
export const Header1 = () => {
  return (
    <div className={style.header1}>
      <div>
        <span>Hi there! We’re TheXPlace.</span>
        <h1>
          A global Video Game professionals community. We make it easy for
          exceptional Talent, Game Makers, and Publishers to work together
          online, and create epic experiences.
        </h1>
      </div>
    </div>
  );
};
export const Header2 = () => {
  return (
    <div className={style.header2}>
      <h3>
        We are proud to share our deep convictions, they keep us committed to
        change.
      </h3>
    </div>
  );
};
export const Header3 = () => {
  return (
    <div className={style.header3}>
      <h3>
        We believe the journey will be fun, exciting and rewarding.<br/> You in?{" "}
        <GradientText
          startColor="#ff3c8e "
          endColor="#a400f1 "
          deg={90}
          text=" careers@thexplace.ai"
          fontWeight={600}
        />
      </h3>
    </div>
  );
};

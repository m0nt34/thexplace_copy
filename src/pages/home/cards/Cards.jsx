import React from "react";
import Card from "./Card";
import style from "../../../assets/styles/pages/home/cards.module.scss";
import Icon2 from "../../../assets/icons/Icon2";
import Icon3 from "../../../assets/icons/Icon3";
import Icon4 from "../../../assets/icons/Icon4";
const Cards = () => {
  return (
    <div className={style.Cards}>
      <Card />
      <Card
        img1="https://thexplace.ai/wp-content/themes/thexplace/images/Find-talent-icon.png"
        title1="For hiring"
        titleDescription1="Hiring done better. Tap into a vetted pool of top talent tailored to handle any project, scope, and need"
        img2={<Icon2 />}
        title2="Find the best fit"
        titleDescription2="Hire with confidence from a global talent pool knowing identity and work history are verified. Tailor your search to fit any project need"
        img3={<Icon3 />}
        title3="Superpower your portfolio"
        titleDescription3="Skip middleman markups and put money back into the game with transparent spend and performance data so you can see the full financial picture"
        img4={<Icon4 />}
        title4="Hire faster"
        titleDescription4="Automate essential administrative tasks like Global Payments, Contracts, and compliance workflows, enabling you to hire faster and accelerate growth more efficiently."
        greenButtonText="Hire Talent"
        link="/for-talent"
      />
    </div>
  );
};

export default Cards;

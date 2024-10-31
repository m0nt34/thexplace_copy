import React from "react";
import style from "../../../assets/styles/pages/home/cards.module.scss";
import GreenButton from "../../../components/UI/GreenButton";
const Card = ({
  img1 = "https://thexplace.ai/wp-content/themes/thexplace/images/For-talent-icon.png",
  title1 = "For talent",
  titleDescription1 = "Get in the game! Join the leading video games professional community and accelerate your career",

  img2 = "https://thexplace.ai/wp-content/themes/thexplace/images/home-icon2.png",
  title2 = "Find your dream job",
  titleDescription2 = "Find rewarding work that matches your skills, interests and ambitions. We verify opportunities so you don’t have to.",

  img3 = "https://thexplace.ai/wp-content/themes/thexplace/images/home-icon1.png",
  title3 = "Superpower your portfolio",
  titleDescription3 = "Create a portfolio that lets your superpowers do the talking (and gets you hired). Just looking? Career Support ensures your next move is your best move.",

  img4 = "https://thexplace.ai/wp-content/themes/thexplace/images/home-icon3.png",
  title4 = "Earn more",
  titleDescription4 = "Earn like a boss with multiple income options. Ease financial stress and get paid (in a timely manner!) so you can focus on your career.",

  greenButtonText = "Join",
  link = "/for-talent",
}) => {
  return (
    <div className={style.talent_hiring_cards}>
      <header>
        <div>
          <h1>{title1}</h1>
          <img src={img1} alt="" />
        </div>
        <p>{titleDescription1}</p>
      </header>
      <ul className={style.middle_cont}>
        <li>
          <div className={style.img_cont}>
            {typeof img2 === "string" ? <img src={img2} alt="" /> : img2}
          </div>
          <div>
            <h1>{title2}</h1>
            <p>{titleDescription2}</p>
          </div>
        </li>
        <li>
          <div className={style.img_cont}>
            {typeof img3 === "string" ? <img src={img3} alt="" /> : img3}
          </div>
          <div>
            <h1>{title3}</h1>
            <p>{titleDescription3}</p>
          </div>
        </li>
        <li>
          <div className={style.img_cont}>
            {typeof img4 === "string" ? <img src={img4} alt="" /> : img4}
          </div>
          <div>
            <h1>{title4}</h1>
            <p>{titleDescription4}</p>
          </div>
        </li>
      </ul>
      <div className={style.bottom_cont}>
        <div className={style.greenButton_cont}>
          <GreenButton text={greenButtonText} link="/join" />
        </div>
        <a className={style.link} href={link}>Learn more →</a>
      </div>
    </div>
  );
};
export default Card;

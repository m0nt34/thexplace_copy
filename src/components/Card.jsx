import React from "react";
import style from "../assets/styles/components/card.module.scss";
import GreenButton from "./UI/GreenButton";
import GlowEffect from "./GlowEffect";
const Card = ({
  title = "Get in the game",
  text = "Join the global community of top video game professionals and find the highest-quality opportunities that match your skills, interests and needs. We verify talent, jobs, and companies so you don’t have to.",
  buttonText = "Apply to join",
  img = "https://thexplace.ai/wp-content/uploads/2024/02/01-verified-network-2.png",
  reverse = false,
}) => {
  return (
    <GlowEffect className={style.card} maxGlow={160}>
      <div className={reverse ? style.inside_cont : style.inside_cont_reverse}>
        <div className={style.second}>
          <img src={img} alt="" />
        </div>
        <div className={style.first}>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={style.button_cont}>
            <GreenButton text={buttonText} />
          </div>
        </div>
      </div>
    </GlowEffect>
  );
};

export default Card;

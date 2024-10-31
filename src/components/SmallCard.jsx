import React from "react";
import style from "../assets/styles/components/smallCard.module.scss";
const SmallCard = ({ img, title, text }) => {
  return (
    <div className={style.small_card}>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SmallCard;

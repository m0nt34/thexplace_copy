import React from "react";
import style from "../../assets/styles/pages/home/home.module.scss";
import { Advertisement } from "./Headers";
import SmallCard from "../../components/SmallCard";
const SmallCards = () => {
  return (
    <div className={style.small_cards_title}>
      <Advertisement />
      <div className={style.small_cards}>
        <SmallCard
          img="https://thexplace.ai/wp-content/uploads/2024/01/Feature-icon-2.png"
          title="Full time"
          text="Find the perfect hire to join your work squad"
        />
        <SmallCard
          img="https://thexplace.ai/wp-content/uploads/2024/01/Feature-icon-1.png"
          title="Project-based"
          text="Subject matter experts for any project size, budget and need"
        />
        <SmallCard
          img="https://thexplace.ai/wp-content/uploads/2024/01/Feature-icon.png"
          title="Fractional work"
          text="World class leaders and discipline experts advise your team to success"
        />
      </div>
    </div>
  );
};

export default SmallCards;

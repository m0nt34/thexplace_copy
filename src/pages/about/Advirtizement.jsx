import React, { useState } from "react";
import style from "../../assets/styles/pages/about/advirtizement.module.scss";
import GlowEffect from "../../components/GlowEffect";
import Reload from "../../assets/icons/Reload";
import {
  Gaming,
  Globally_distributed,
  Intergenerational,
  Multinational,
  Musical,
  Pet_loving,
} from "../../data/aboutPageAd";

const contentArray = [
  {
    component: <Gaming />,
    glow: "rgba(238, 2, 144, 0.3)",
  },
  {
    component: <Multinational />,
    glow: "rgba(1, 89, 255, 0.4)",
  },
  {
    component: <Intergenerational />,
    glow: "rgba(238, 2, 144, 0.3)",
  },
  {
    component: <Globally_distributed />,
    glow: "rgba(14, 201, 145, 0.4) ",
  },
  {
    component: <Musical />,
    glow: "rgba(130, 2, 255, 0.5)",
  },
  {
    component: <Pet_loving />,
    glow: "rgba(1, 89, 255, 0.4) ",
  },
];
const Advirtizement = () => {
  const [num, setNum] = useState(0);
  return (
    <GlowEffect
      glowColor={contentArray[num].glow}
      className={style.advirtizement}
      maxGlow={150}
    >
      <div className={style.inside_cont}>
        <div className={style.left}>
          <div className={style.top}>
            <h1>Our small and mighty team</h1>
            {contentArray[num].component}
          </div>
          <div className={style.bottom}>
            <button
              onClick={() => {
                setNum((prev) => (prev + 1) % 6);
              }}
            >
              <div>
                <Reload />
              </div>
            </button>
            <span>Show me more</span>
          </div>
        </div>
    
          <img
          className={style.earth}
            src="https://thexplace.ai/wp-content/themes/thexplace/images/world-map.gif"
            alt=""
          />
      
      </div>
    </GlowEffect>
  );
};

export default Advirtizement;

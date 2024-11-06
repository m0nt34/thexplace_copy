import React from "react";
import style from "../../assets/styles/pages/about/cards.module.scss";
import GradientText from "../../components/GradientText";
import GlowEffect from "../../components/GlowEffect";
const Card = ({
  img = "https://thexplace.ai/wp-content/uploads/2021/11/about-us-1.png",
  glowColor = "rgba(1, 89, 255, 0.4)",
  grStart = "#0057ff",
  grEnd = "#00c1db",
  deg = 270,
  mainText = "We put people first",
  startText = "People are the heart of TheXPlace.",
  text = "We are building TheXPlace to help people flourish and feel valued in the Video Games industry. We also believe in people helping people create their own success. We are building TheXPlace to enable remote creative collaboration. It’s all of these talented people working together that makes the magic happen.",
}) => {
  return (
    <GlowEffect glowColor={glowColor} className={style.glow_box}>
      <div className={style.card}>
        <div className={style.left}>
          <div>
            <img src={img} alt="" />
            <GradientText
              startColor={grStart}
              endColor={grEnd}
              deg={deg}
              text={mainText}
              fontWeight="600"
            />
          </div>
        </div>
        <div className={style.right}>
          {startText} <p>{text}</p>
        </div>
      </div>
    </GlowEffect>
  );
};

export default Card;

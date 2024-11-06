import React from "react";
import style from "../assets/styles/pages/about/cards.module.scss";
const GradientText = ({
  startColor = "#ff7e5f",
  endColor = "#feb47b",
  deg = 90,
  text = "Gradient Text",
  fontWeight = "normal",
}) => {
  const gradientStyle = {
    background: `linear-gradient(${deg}deg, ${startColor}, ${endColor})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: fontWeight,
    display: "inline-block",
  };

  return <span className={style.gradient_text} style={gradientStyle}>{text}</span>;
};

export default GradientText;

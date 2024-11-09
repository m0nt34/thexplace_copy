import React from "react";
import style from "../../assets/styles/components/UI/greenButton.module.scss";
import { Link } from "react-router-dom";
const GreenButton = ({ text = "some text" }) => {
  return (
    <button className={style.greenButton}>
      <Link to="/onboarding">{text}</Link>
    </button>
  );
};

export default GreenButton;

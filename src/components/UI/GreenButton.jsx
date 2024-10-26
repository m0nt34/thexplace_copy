import React from "react";
import style from "../../assets/styles/components/UI/greenButton.module.scss";
import { Link } from "react-router-dom";
const GreenButton = ({ text = "some text", link = "/" }) => {
  return (
    <button className={style.greenButton}>
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default GreenButton;

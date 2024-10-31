import React from "react";
import style from "../../assets/styles/pages/home/home.module.scss";

export const Introduction = () => {
  return (
    <div className={style.introduction}>
      <h1>Hi there👋 We’re TheXPlace.</h1>
      <p>
        The only professional network connecting verified talent and studios, to
        build exceptional teams and epic gaming experiences.
      </p>
    </div>
  );
};

export const Advertisement = () => {
  return (
    <div className={style.advertisement}>
      <h1>Top talent to meet your dynamic production needs</h1>
      <p>Vetted, skilled talent — ready to work today!</p>
    </div>
  );
};

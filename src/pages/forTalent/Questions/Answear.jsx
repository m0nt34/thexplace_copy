import React, { useState } from "react";
import style from "../../../assets/styles/pages/forTalent/forTalent.module.scss";

const Answear = ({ question = "", answear = "" }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.answear}>
      <header>
        <h1>{question}</h1>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <img
            src="https://thexplace.ai/wp-content/themes/thexplace/images/arrow-down.png"
            alt=""
          ></img>
        </button>
      </header>
      <div
        className={style.description}
        style={{
          maxHeight: open ? "500px" : "0",
          transition: "max-height 0.5s ease-out",
        }}
      >
        <p>{answear}</p>
      </div>
    </div>
  );
};

export default Answear;

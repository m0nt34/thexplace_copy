import React from "react";
import GlowEffect from "../../components/GlowEffect";
import style from "../../assets/styles/pages/forTalent/FuturePlan.module.scss";
import LongArrowRight from "../../assets/icons/LongArrowRight";
import ShortArrow from "../../assets/icons/ShortArrow";
const FuturePlan = () => {
  return (
    <GlowEffect className={style.FuturePlan_cont} maxGlow={195}>
      <div>
        <img
          src="https://staging-thexplace.kinsta.cloud/wp-content/uploads/2024/02/image-27.png"
          alt=""
        />
        <div className={style.futurePlan_Text}>
          <span>Apply to join</span>
        </div>
      </div>
      <div className={style.arrow}>
        <LongArrowRight />
      </div>
      <div className={style.shortArrow}>
        <ShortArrow />
      </div>

      <div>
        <img
          src="https://staging-thexplace.kinsta.cloud/wp-content/uploads/2024/02/image-29.png"
          alt=""
        />
        <div className={style.futurePlan_Text}>
          <span>Find dream jobs</span>
        </div>
      </div>
      <div className={style.arrow}>
        <LongArrowRight />
      </div>
      <div className={style.shortArrow}>
        <ShortArrow />
      </div>
      <div>
        <img
          src="https://staging-thexplace.kinsta.cloud/wp-content/uploads/2024/02/image-28.png"
          alt=""
        />
        <div className={style.futurePlan_Text}>
          <span>Accelerate your career</span>
        </div>
      </div>
    </GlowEffect>
  );
};

export default FuturePlan;

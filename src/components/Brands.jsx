import React from "react";
import style from "../assets/styles/components/brands.module.scss";
import { brandImagesSet } from "../data/brands";
const Brands = () => {
  return (
    <div className={style.brands_cont}>
      <div className={style.show_brands}>
        {brandImagesSet.map((brand, i) => (
          <div key={i}>
            <img src={brand} alt="img" />
          </div>
        ))}
        {brandImagesSet.map((brand, i) => (
          <div key={i}>
            <img src={brand} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

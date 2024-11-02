import React, { useState } from "react";
import style from "../../assets/styles/pages/home/carousel.module.scss";
import ArrowRight from "../../assets/icons/ArrowRight";
import { carouselData } from "../../data/carousel";
const Carousel = () => {
  const pages = Array(9)
    .fill()
    .map((_, i) => i);
  const [page, setPage] = useState(0);
  return (
    <div className={style.carousel}>
      <div className={style.inside_cont}>
        <img
          src="https://thexplace.ai/wp-content/themes/thexplace/images/quote.png"
          alt=""
        />
        <div className={style.text_area}>{carouselData[page].text}</div>
        <div className={style.bottom_cont}>
          <div className={style.person}>
            <img src={carouselData[page].img} alt="" />
            <div className={style.person_info}>
              <h5>{carouselData[page].name}</h5>
              <span>{carouselData[page].specialized}</span>
            </div>
          </div>
          <div className={style.slider_pages}>
            <div className={style.pages}>
              {pages.map((i) => (
                <button
                  onClick={() => {
                    setPage(i);
                  }}
                  key={i}
                  className={page === i ? style.active : null}
                ></button>
              ))}
            </div>
            <button
              className={style.next_page_button}
              onClick={() => setPage((prev) => (prev + 1) % 9)}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

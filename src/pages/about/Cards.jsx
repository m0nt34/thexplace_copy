import React from "react";
import style from "../../assets/styles/pages/about/cards.module.scss";
import Card from "./Card";
const Cards = () => {
  return (
    <div className={style.cards}>
      <Card />
      <Card
        img="https://thexplace.ai/wp-content/uploads/2021/11/about-us-2.png"
        glowColor="rgba(238, 2, 144, 0.3)"
        grStart="#ff3c8e "
        grEnd="#a400f1 "
        deg={0}
        mainText="We believe that Talent has no borders…"
        startText="Talent may be everywhere, but opportunity is not."
        text="Our commitment to enabling remote creative collaboration seeks to change the game by creating opportunities and improving access for talent around the world. Our multinational, globally-distributed team not only understands the importance of diverse backgrounds, cultures and experiences, but empowers those differences to create an ecosystem that will connect and inspire a borderless games industry for years to come."
      />
      <Card
        img="https://thexplace.ai/wp-content/uploads/2021/11/about-us-3.png"
        glowColor="rgba(130, 2, 255, 0.5)"
        grStart="#8000ff"
        grEnd="#cc3dff"
        deg={180}
        mainText="We envision a more inclusive games industry"
        startText="We are committed to making a global impact on diversity, equity and inclusion in the gaming industry."
        text="That’s why we created TheXPlace as a safe and welcoming network where anyone from any background can do their best work, and teams can diversify. We are creating features to improve representation and mitigate all forms of bias in the hiring process. We believe that diverse teams are valuable, more successful, and better serve the global gaming community."
      />
    </div>
  );
};

export default Cards;

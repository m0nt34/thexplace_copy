import React from "react";
import style from "../../assets/styles/pages/home/videobox.module.scss";
import GreenButton from "../../components/UI/GreenButton";
const VideoBox = () => {
  return (
    <div className={style.outer_cont}>
      <div className={style.main_cont}>
        <div className={style.inside_cont}>
          <video
            className={style.video}
            rel="preload"
            poster="https://thexplace.ai/wp-content/themes/thexplace/hero.jpg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://thexplace.ai/wp-content/uploads/2022/01/hero-video-desktop.webm"
              type="video/webm"
            />
          </video>
          <div className={style.main_content}>
            <h1>
              Where game makers
              <br />
              and game changers unite
            </h1>
            <div class={style.show_words}>
              <span className={style.info_text}>Find the best</span>
              <div class={style.words}>
                <span>game designers</span>
                <span>opportunities</span>
                <span>game producers</span>
                <span>connections</span>
                <span>engineers</span>
                <span>jobs</span>
              </div>
              <span className={style.info_text}>in the video game industry</span>
            </div>
            <div className={style.green_btn}>

            <GreenButton text="Join early access" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;

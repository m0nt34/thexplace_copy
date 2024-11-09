import React from "react";
import style from "../../assets/styles/pages/forHiring/videoBox.module.scss";
const VideoBox = () => {
  return (
    <div className={style.videoBox}>
      <div className={style.left}>
        <div>
          <h1>Capabilities</h1>
          <p>
            Industry-specific skills, game dev credits, and portfolios with
            personalized videos so you know who can get the job done.
          </p>
        </div>
        <div>
          <h1>Collaborations</h1>
          <p>
            Past collaborators endorsements and talent's preferred collaborators
            to gauge fit with your team
          </p>
        </div>
        <div>
          <h1>Credibility</h1>
          <p>Verified capabilities and identity that you can trust.</p>
        </div>
      </div>
      <div className={style.right}>
        <video
          poster="https://staging-thexplace.kinsta.cloud/wp-content/uploads/2024/03/poster-triangle.jpg"
          autoPlay
          loop
          muted
        >
          <source src="https://thexplace.ai/wp-content/uploads/2024/03/Matching-block-video-compressed.mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoBox;

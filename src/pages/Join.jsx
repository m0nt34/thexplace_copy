import React from "react";
import style from "../assets/styles/pages/join.module.scss";

const Join = () => {
  return (
    <div className={style.join}>
      <div className={style.background}></div>
      <img className={style.header_img} src="https://thexplace.ai/wp-content/themes/thexplace/images/thexplace-logo.svg" alt="" />
      <div className={style.card}>
        <header>
          <h1>
            Welcome to <br /> TheXPlace!
          </h1>
          <img
            alt="Welcome to TheXPlace!"
            src="https://app2.thexplace.ai/_next/image?url=https%3A%2F%2Fproduction-thexplace-static-content.s3.us-west-1.amazonaws.com%2Fimages%2FWelcome.png&w=256&q=75"
          />
        </header>
        <div className={style.bottom}>
          <h2>
            We are thrilled to welcome you to TheXPlace — a place to connect and
            find work in the video games industry.
          </h2>
          <div className={style.choices}>
            <div className={style.choice}>
              <div className={style.choice_inside_cont}>
                <div>
                  <span>
                    <svg viewBox="0 0 16 16" height="16px" width="16px">
                      <path
                        d="M8 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                        fill="white"
                      ></path>
                      <path
                        d="M15.446 13.069C16.053 14.61 14.656 16 13 16H3C1.343 16-.053 14.61.554 13.069a8.003 8.003 0 0 1 14.892 0Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <p>Join as a talent</p>
                </div>
                <svg viewBox="0 0 16 16" height="16px" width="16px">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M.293.293a1 1 0 0 1 1.414 0L7.414 6l-5.707 5.707a1 1 0 0 1-1.414-1.414L4.586 6 .293 1.707a1 1 0 0 1 0-1.414Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>

            <div className={style.choice}>
              <div className={style.choice_inside_cont}>
                <div>
                  <span className={style.company_svg}>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      width="16px"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.998 0C14.5509 0 14.9992 0.447715 14.9992 1V15C14.9992 15.5523 14.5509 16 13.998 16H7.99093C7.43799 16 6.98975 15.5523 6.98975 15V14C6.98975 13.4477 6.5415 13 5.98857 13H4.98739C4.43445 13 3.98621 13.4477 3.98621 14V15C3.98621 15.5523 3.53796 16 2.98503 16H1.98385C1.43091 16 0.982666 15.5523 0.982666 15V1C0.982666 0.447715 1.43091 0 1.98385 0H13.998ZM2.99431 3C2.99431 2.44772 3.44256 2 3.99549 2H5.99785C6.55079 2 6.99903 2.44772 6.99903 3V5C6.99903 5.55228 6.55079 6 5.99785 6H3.99549C3.44256 6 2.99431 5.55228 2.99431 5V3ZM3.99549 7C3.44256 7 2.99431 7.44772 2.99431 8V10C2.99431 10.5523 3.44256 11 3.99549 11H5.99785C6.55079 11 6.99903 10.5523 6.99903 10V8C6.99903 7.44772 6.55079 7 5.99785 7H3.99549ZM9.00139 3C9.00139 2.44772 9.44964 2 10.0026 2H12.0049C12.5579 2 13.0061 2.44772 13.0061 3V5C13.0061 5.55228 12.5579 6 12.0049 6H10.0026C9.44964 6 9.00139 5.55228 9.00139 5V3ZM10.0026 7C9.44964 7 9.00139 7.44772 9.00139 8V10C9.00139 10.5523 9.44964 11 10.0026 11H12.0049C12.5579 11 13.0061 10.5523 13.0061 10V8C13.0061 7.44772 12.5579 7 12.0049 7H10.0026Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <p>Join as a company</p>
                </div>
                <svg viewBox="0 0 16 16" height="16px" width="16px">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M.293.293a1 1 0 0 1 1.414 0L7.414 6l-5.707 5.707a1 1 0 0 1-1.414-1.414L4.586 6 .293 1.707a1 1 0 0 1 0-1.414Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;

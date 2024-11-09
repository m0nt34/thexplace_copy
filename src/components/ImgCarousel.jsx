import React, { useEffect, useState, useRef } from "react";
import style from "../assets/styles/components/imgCarousel.module.scss";
import { gsap } from "gsap";
import GreenButton from "./UI/GreenButton";
import Location from "../assets/icons/Location";
import X from "../assets/icons/X";

const ImgCarousel = ({
  imgs = [
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-01.jpg",
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-02.jpg",
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-03.jpg",
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-04.jpg",
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-05.jpg",
    "https://thexplace.ai/wp-content/uploads/2022/01/Talent-photos-06.jpg",
  ],
  texts = [
    {
      name: "Ivan",
      specialized: "Game designer",
      location: "Barcelona, Spain",
      m1: "Live and breathe",
      m2: "mobile games",
    },
    {
      name: "Daniella",
      specialized: "Creative lead",
      location: "Córdoba, Argentina",
      m1: "Bringing out",
      m2: "players' creativity",
    },
    {
      name: "Alex",
      specialized: "Gameplay engineer",
      location: "Austin, USA",
      m1: "Creative solutions for",
      m2: "optimizing playability",
    },
    {
      name: "Chris",
      specialized: "Tech director",
      location: "Vancouver, Canada",
      m1: "Building interactive",
      m2: "storytelling tech",
    },
    {
      name: "Sofia",
      specialized: "Live Ops Producer",
      location: "Seoul, South Korea",
      m1: "Fresh ways to",
      m2: "engage players",
    },
    {
      name: "Scott",
      specialized: "Narrative designer",
      location: "London, UK",
      m1: "Happy stories for",
      m2: "happy games",
    },
  ],
  shadows = {
    active: true,
    shadow: [
      "-400px -200px 300px -150px rgba(99, 9, 160, 0.4), 300px 0px 300px -100px rgba(125, 1, 226, 0.4)",
      "-300px -200px 300px -100px rgba(24, 190, 255, 0.4), 300px 0px 300px -100px rgba(22, 174, 235, 0.4)",
      "-400px -200px 300px -100px rgba(149, 1, 247, 0.4), 300px 0px 300px -100px rgba(236, 22, 255, 0.4)",
      "-400px -200px 300px -200px rgba(241, 241, 241, 0.4), 300px 0px 300px -100px rgba(255, 255, 255, 0.4)",
      "-400px -200px 300px -100px rgba(21, 112, 197, 0.4), 300px 0px 300px -100px rgba(0, 132, 255, 0.4)",
      "-400px -200px 300px -100px rgba(140, 141, 141, 0.4), 300px 0px 300px -100px rgba(224, 224, 224, 0.4)",
    ],
  },
  showBottom = true,
  h1 = "Get work.",
  h2 = "Elevate your career.",
  p1 = "Finding steady work shouldn’t be a challenge.",
  p2 = "Join the Video Game talent community where verified",
  p3 = "opportunities await.",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRefs = useRef([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imgs.length]);

  useEffect(() => {
    gsap.set(imgRefs.current[currentIndex], { zIndex: 3 });
    const currentAnim = gsap.fromTo(
      imgRefs.current[currentIndex],
      { xPercent: 100 },
      {
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    gsap.set(imgRefs.current[currentIndex - 1 === -1 ? 5 : currentIndex - 1], {
      zIndex: 2,
    });
    const previousAnim = gsap.to(
      imgRefs.current[currentIndex - 1 === -1 ? 5 : currentIndex - 1],
      {
        xPercent: -100,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    return () => {
      currentAnim.kill();
      previousAnim.kill();
    };
  }, [currentIndex]);
  return (
    <div className={style.carousel_cont}>
      <div
        className={style.inside_cont}
        style={
          shadows.active
            ? {
                transition: "box-shadow 0.3s",
                boxShadow: shadows.shadow[currentIndex],
              }
            : null
        }
      >
        <div className={style.imgs}>
          {imgs.map((img, i) => (
            <img
              key={i}
              ref={(el) => (imgRefs.current[i] = el)}
              src={img}
              alt={`carousel-image-${i}`}
              style={{ zIndex: i === currentIndex ? 2 : 0 }}
            />
          ))}
        </div>
        <div className={style.text_cont}>
          <div className={style.top}>
            <h1>
              {h1}
              <br />
              {h2}
            </h1>
            <p>
              {p1}
              <br />
              {p2}
              <br />
              {p3}
            </p>
            <div className={style.greenBtn}>
              <GreenButton text="Join early access" link="/" />
            </div>
          </div>
          {showBottom && (
            <div className={style.bottom}>
              <div className={style.left}>
                <div className={style.name}>{texts[currentIndex].name}</div>
                <div className={style.specialized}>
                  {texts[currentIndex].specialized}
                </div>
                <span>
                  <Location />
                  {texts[currentIndex].location}
                </span>
              </div>
              <div className={style.middle}>
                <X />
              </div>
              <div className={style.right}>
                {texts[currentIndex].m1}
                <br />
                {texts[currentIndex].m2}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;

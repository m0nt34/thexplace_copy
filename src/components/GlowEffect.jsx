import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlowEffect = ({
  children,
  glowColor = "rgba(255, 165, 0, 0.8)",
  className,
  maxGlow = 125
}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const glowTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
      },
    });

    glowTimeline
      .to(
        boxRef.current,
        {
          boxShadow: `0 0 50px ${glowColor}`,
          duration: 1,
          ease: "power2.in",
        },
        0
      )
      .to(
        boxRef.current,
        {
          boxShadow: `0 0 ${maxGlow}px ${glowColor}`,
          duration: 1,
          ease: "power2.in",
        },
        1
      )
      .to(
        boxRef.current,
        {
          boxShadow: `0 0 0px ${glowColor}`,
          duration: 1,
          ease: "power2.in",
        },
        2
      );

    return () => glowTimeline.kill();
  }, [glowColor, maxGlow]);

  return (
    <div className={className} ref={boxRef}>
      {children}
    </div>
  );
};

export default GlowEffect;

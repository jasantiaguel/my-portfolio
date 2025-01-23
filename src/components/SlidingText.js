"use client";

// Imports
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SlidingText.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SlidingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  let xPercent = 1;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      sliderContainer.current,
      { opacity: 0 },
      { opacity: 1, 
        duration: 2,
        delay: 3.6,
        ease: "power2.out" }
    );

    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction * 1;
        },
      },
      y: "-=200px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div ref={sliderContainer} className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <p ref={firstText}>
          PORTFOLIO 2025
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
          JONATHAN ANDREW
          SANTIAGUEL Y.1997
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
          INNOVATION · EFFICIENCY · CREATIVITY
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
        </p>
        <p ref={secondText}>
          PORTFOLIO 2025
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
          JONATHAN ANDREW
          SANTIAGUEL Y.1997
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
          INNOVATION · EFFICIENCY · CREATIVITY
          &nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>
  );
}
